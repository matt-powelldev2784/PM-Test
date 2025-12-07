import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

if (!window.matchMedia) {
  // Embla relies on matchMedia to configure breakpoints, so stub it for jsdom
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

if (!window.IntersectionObserver) {
  class IntersectionObserverStub implements IntersectionObserver {
    readonly root: Element | Document | null = null
    readonly rootMargin: string = '0px'
    readonly thresholds: ReadonlyArray<number> = []
    observe = vi.fn<(target: Element) => void>()
    unobserve = vi.fn<(target: Element) => void>()
    disconnect = vi.fn<() => void>()
    takeRecords = vi.fn<() => IntersectionObserverEntry[]>(() => [])
  }

  // Embla uses IntersectionObserver to detect visibility; provide a minimal stub
  window.IntersectionObserver = IntersectionObserverStub
}

if (!window.ResizeObserver) {
  class ResizeObserverStub implements ResizeObserver {
    observe = vi.fn<(target: Element) => void>()
    unobserve = vi.fn<(target: Element) => void>()
    disconnect = vi.fn<() => void>()
  }

  // Embla listens for ResizeObserver callbacks to recompute layout
  window.ResizeObserver = ResizeObserverStub
}
