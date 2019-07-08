import { style, themeGetter, compose } from '../style'
import { rpxPx, percent } from '../unit'

export const getColor = themeGetter({ name: 'color', key: 'colors' })

export const getPx = themeGetter({ name: 'px', transform: rpxPx })

export const getPercent = themeGetter({
  name: 'percent',
  transform: percent,
})

export const getRadius = themeGetter({
  name: 'radius',
  key: 'radii',
  transform: rpxPx,
})

export const opacity = style({
  prop: 'opacity',
})

export const overflow = style({
  prop: 'overflow',
})

export const getTransition = themeGetter({
  name: 'transition',
  key: 'transitions',
})

export const transition = style({ prop: 'transition', themeGet: getTransition })

export const basics = compose(
  opacity,
  overflow,
  transition,
)
