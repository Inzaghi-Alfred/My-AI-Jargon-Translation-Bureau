export type Direction = 'up' | 'down' | 'left' | 'right'

export type Point = {
  x: number
  y: number
}

export type GameStatus = 'idle' | 'running' | 'paused' | 'gameover'

export type SnakeState = {
  snake: Point[]
  direction: Direction
  food: Point
  score: number
  status: GameStatus
  gridSize: number
}

const directionDelta: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
}

export const isSamePoint = (a: Point, b: Point): boolean => a.x === b.x && a.y === b.y

export const isOppositeDirection = (a: Direction, b: Direction): boolean => {
  return (
    (a === 'up' && b === 'down') ||
    (a === 'down' && b === 'up') ||
    (a === 'left' && b === 'right') ||
    (a === 'right' && b === 'left')
  )
}

export const resolveDirection = (current: Direction, next?: Direction): Direction => {
  if (!next || isOppositeDirection(current, next)) {
    return current
  }
  return next
}

export const isInsideGrid = (point: Point, gridSize: number): boolean => {
  return point.x >= 0 && point.y >= 0 && point.x < gridSize && point.y < gridSize
}

const hasCollision = (point: Point, snake: Point[]): boolean => {
  return snake.some((segment) => isSamePoint(segment, point))
}

export const getNextHead = (head: Point, direction: Direction): Point => {
  const delta = directionDelta[direction]
  return {
    x: head.x + delta.x,
    y: head.y + delta.y,
  }
}

export const spawnFood = (
  snake: Point[],
  gridSize: number,
  rng: () => number = Math.random,
): Point | null => {
  const freeCells: Point[] = []

  for (let y = 0; y < gridSize; y += 1) {
    for (let x = 0; x < gridSize; x += 1) {
      const point = { x, y }
      if (!hasCollision(point, snake)) {
        freeCells.push(point)
      }
    }
  }

  if (freeCells.length === 0) {
    return null
  }

  const index = Math.floor(rng() * freeCells.length)
  return freeCells[index]
}

export const createInitialState = (
  gridSize = 16,
  rng: () => number = Math.random,
): SnakeState => {
  const center = Math.floor(gridSize / 2)
  const snake: Point[] = [
    { x: center, y: center },
    { x: center - 1, y: center },
    { x: center - 2, y: center },
  ]

  const food = spawnFood(snake, gridSize, rng)
  if (!food) {
    throw new Error('Unable to place initial food')
  }

  return {
    snake,
    direction: 'right',
    food,
    score: 0,
    status: 'idle',
    gridSize,
  }
}

export const stepSnake = (
  state: SnakeState,
  nextDirection?: Direction,
  rng: () => number = Math.random,
): SnakeState => {
  if (state.status !== 'running') {
    return state
  }

  const direction = resolveDirection(state.direction, nextDirection)
  const head = state.snake[0]
  const nextHead = getNextHead(head, direction)

  const ateFood = isSamePoint(nextHead, state.food)
  const bodyForCollision = ateFood ? state.snake : state.snake.slice(0, -1)

  if (!isInsideGrid(nextHead, state.gridSize) || hasCollision(nextHead, bodyForCollision)) {
    return {
      ...state,
      direction,
      status: 'gameover',
    }
  }

  const nextSnake = ateFood
    ? [nextHead, ...state.snake]
    : [nextHead, ...state.snake.slice(0, -1)]

  if (!ateFood) {
    return {
      ...state,
      direction,
      snake: nextSnake,
    }
  }

  const nextFood = spawnFood(nextSnake, state.gridSize, rng)
  if (!nextFood) {
    return {
      ...state,
      direction,
      snake: nextSnake,
      score: state.score + 1,
      status: 'gameover',
      food: state.food,
    }
  }

  return {
    ...state,
    direction,
    snake: nextSnake,
    score: state.score + 1,
    food: nextFood,
  }
}
