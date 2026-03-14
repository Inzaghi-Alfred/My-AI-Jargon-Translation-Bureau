import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react'
import {
  createInitialState,
  type Direction,
  type SnakeState,
  stepSnake,
  isSamePoint,
} from './snakeLogic'

const GRID_SIZE = 16
const TICK_MS = 150

const keyboardToDirection: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  w: 'up',
  W: 'up',
  s: 'down',
  S: 'down',
  a: 'left',
  A: 'left',
  d: 'right',
  D: 'right',
}

const SnakeGame = () => {
  const [game, setGame] = useState<SnakeState>(() => createInitialState(GRID_SIZE))
  const queuedDirection = useRef<Direction | undefined>(undefined)

  const restart = () => {
    queuedDirection.current = undefined
    setGame(createInitialState(GRID_SIZE))
  }

  const start = () => {
    setGame((prev) =>
      prev.status === 'idle' || prev.status === 'paused'
        ? {
            ...prev,
            status: 'running',
          }
        : prev,
    )
  }

  const pause = () => {
    setGame((prev) =>
      prev.status === 'running'
        ? {
            ...prev,
            status: 'paused',
          }
        : prev,
    )
  }

  const handleDirection = (direction: Direction) => {
    queuedDirection.current = direction
    setGame((prev) => {
      if (prev.status === 'idle' || prev.status === 'paused') {
        return {
          ...prev,
          status: 'running',
        }
      }
      return prev
    })
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const direction = keyboardToDirection[event.key]
      if (direction) {
        event.preventDefault()
        handleDirection(direction)
      }

      if ((event.key === ' ' || event.key === 'Enter') && game.status === 'gameover') {
        event.preventDefault()
        restart()
      }

      if (event.key === 'p' || event.key === 'P') {
        event.preventDefault()
        if (game.status === 'running') {
          pause()
        } else if (game.status === 'paused') {
          start()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [game.status])

  useEffect(() => {
    if (game.status !== 'running') {
      return
    }

    const timer = window.setInterval(() => {
      setGame((prev) => {
        const next = stepSnake(prev, queuedDirection.current)
        queuedDirection.current = undefined
        return next
      })
    }, TICK_MS)

    return () => window.clearInterval(timer)
  }, [game.status])

  const cells = useMemo(() => {
    const output: ReactElement[] = []

    for (let y = 0; y < game.gridSize; y += 1) {
      for (let x = 0; x < game.gridSize; x += 1) {
        const point = { x, y }
        const isHead = isSamePoint(game.snake[0], point)
        const isFood = isSamePoint(game.food, point)
        const isBody = !isHead && game.snake.some((part) => isSamePoint(part, point))

        let className = 'w-5 h-5 border border-gray-900 bg-gray-950'
        if (isBody) className = 'w-5 h-5 border border-gray-900 bg-emerald-700'
        if (isHead) className = 'w-5 h-5 border border-gray-900 bg-emerald-400'
        if (isFood) className = 'w-5 h-5 border border-gray-900 bg-red-500'

        output.push(<div key={`${x}-${y}`} className={className} />)
      }
    }

    return output
  }, [game.food, game.gridSize, game.snake])

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl border border-gray-800 rounded-xl p-5 bg-[#0a0f1e] space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Snake</h2>
          <div className="font-mono text-sm text-amber-400">Score: {game.score}</div>
        </div>

        <div className="text-sm text-gray-400">
          Arrow keys or WASD to move. Press <span className="font-mono">P</span> to pause/resume.
        </div>

        <div
          className="grid mx-auto"
          style={{
            gridTemplateColumns: `repeat(${game.gridSize}, minmax(0, 1fr))`,
            width: 'min(88vw, 420px)',
          }}
        >
          {cells}
        </div>

        <div className="flex flex-wrap gap-2">
          {game.status !== 'running' ? (
            <button
              onClick={start}
              className="px-3 py-2 rounded border border-gray-700 hover:border-amber-500 text-sm"
            >
              {game.status === 'paused' ? 'Resume' : 'Start'}
            </button>
          ) : (
            <button
              onClick={pause}
              className="px-3 py-2 rounded border border-gray-700 hover:border-amber-500 text-sm"
            >
              Pause
            </button>
          )}

          <button
            onClick={restart}
            className="px-3 py-2 rounded border border-gray-700 hover:border-amber-500 text-sm"
          >
            Restart
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 max-w-[220px]">
          <div />
          <button
            onClick={() => handleDirection('up')}
            className="px-3 py-2 rounded border border-gray-700 hover:border-amber-500 text-sm"
            aria-label="Move up"
          >
            Up
          </button>
          <div />
          <button
            onClick={() => handleDirection('left')}
            className="px-3 py-2 rounded border border-gray-700 hover:border-amber-500 text-sm"
            aria-label="Move left"
          >
            Left
          </button>
          <button
            onClick={() => handleDirection('down')}
            className="px-3 py-2 rounded border border-gray-700 hover:border-amber-500 text-sm"
            aria-label="Move down"
          >
            Down
          </button>
          <button
            onClick={() => handleDirection('right')}
            className="px-3 py-2 rounded border border-gray-700 hover:border-amber-500 text-sm"
            aria-label="Move right"
          >
            Right
          </button>
        </div>

        {game.status === 'gameover' ? (
          <div className="text-red-400 text-sm">Game over. Press Restart or Enter/Space.</div>
        ) : null}
      </div>
    </div>
  )
}

export default SnakeGame
