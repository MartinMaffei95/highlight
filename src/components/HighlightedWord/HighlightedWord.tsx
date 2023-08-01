import { CSSProperties, FC } from 'react';
import { twMerge } from 'tailwind-merge';
type Props = {
  text: string;
  containerClassName?: string;
  highlightConfig?: HighlightConfig;
  variation?: Variations;
};

interface HighlightConfig extends SizeProps, TransformProps, PositionProps {
  color?: string;
}

interface PositionProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

interface SizeProps {
  height?: string | number;
  width?: string | number;
}

interface TransformProps {
  skewX?: number;
  skewY?: number;
  rotate?: number;
  rotateX?: number;
  rotateY?: number;
}

type Variations = 'base' | 'underlined' | 'with-pen';

const whitPen: CSSProperties = {
  display: 'flex',
  width: '100%',
  position: 'absolute',
  bottom: '.25rem',
  left: 0,
  height: '40%',
  transform: 'rotate(-1deg) skewX(12deg)',
  background: ' rgb(6 182 212)',
};

const highlights: { [variation in Variations]: CSSProperties } = {
  base: {},
  underlined: {},
  'with-pen': whitPen,
};

const breakString = (text: string): string[] => {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);

  return [firstLetter, rest];
};

const HighlightedWord: FC<Props> = ({
  text,
  containerClassName,
  highlightConfig,
  variation = 'with-pen',
}) => {
  const style: CSSProperties = {};
  const t = breakString(text);
  return (
    <div
      className={twMerge(
        ` flex w-max text-neutral-900 text-3xl font-bold relative`,
        containerClassName
      )}
    >
      <div
        style={{
          ...highlights[variation],
          ...style,
        }}
      />
      <p className="z-10">
        {t[0]}
        {t[1]}
      </p>
    </div>
  );
};

export default HighlightedWord;
