import { names } from '@nrwl/devkit';
import { dirname } from 'path';

export const iconsets: Iconset[] = [
  {
    glob: 'node_modules/heroicons/24/outline/**/*.svg',
    output: 'packages/heroicons/outline/src/index.ts',
    getIconName: (name: string) => `hero${name}`,
  },
  {
    glob: 'node_modules/heroicons/24/solid/**/*.svg',
    output: 'packages/heroicons/solid/src/index.ts',
    getIconName: (name: string) => `hero${name}Solid`,
  },
  {
    glob: 'node_modules/heroicons/20/solid/**/*.svg',
    output: 'packages/heroicons/mini/src/index.ts',
    getIconName: (name: string) => `hero${name}Mini`,
  },
  {
    glob: 'node_modules/feather-icons/dist/icons/**/*.svg',
    output: 'packages/feather-icons/src/index.ts',
    getIconName: (name: string) => `feather${name}`,
  },
  {
    glob: 'node_modules/jam-icons/svg/**/*.svg',
    output: 'packages/jam-icons/src/index.ts',
    getIconName: (name: string) => `jam${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@primer/octicons/build/svg/**/*-16.svg',
    output: 'packages/octicons/src/index.ts',
    getIconName: (name: string) => `oct${name.replace('16', '')}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@primer/octicons/build/svg/**/*-24.svg',
    output: 'packages/octicons/large/src/index.ts',
    getIconName: (name: string) => `oct${name.replace('24', '')}Large`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@radix-ui/react-icons/icons/**/*.svg',
    output: 'packages/radix-icons/src/index.ts',
    getIconName: (name: string) => `radix${name}`,
  },
  {
    glob: 'node_modules/@tabler/icons/icons/**/*.svg',
    output: 'packages/tabler-icons/src/index.ts',
    getIconName: (name: string) => `tabler${name}`,
  },
  {
    glob: 'node_modules/css.gg/icons/svg/**/*.svg',
    output: 'packages/css-gg/src/index.ts',
    getIconName: (name: string) => `css${name}`,
  },
  {
    glob: 'node_modules/akar-icons-app/**/*.svg',
    output: 'packages/akar-icons/src/index.ts',
    getIconName: (name: string) => `akar${name}`,
    svg: {
      colorAttr: 'stroke',
      removeStroke: true,
    },
  },
  {
    glob: 'node_modules/bootstrap-icons/icons/**/*.svg',
    output: 'packages/bootstrap-icons/src/index.ts',
    getIconName: (name: string) => `bootstrap${name}`,
  },
  {
    glob: 'node_modules/ionicons/dist/svg/**/*.svg',
    output: 'packages/ionicons/src/index.ts',
    getIconName: (name: string) => `ion${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@material-icons/svg/svg/**/baseline.svg',
    output: 'packages/material-icons/baseline/src/index.ts',
    getIconName: (name: string, path: string) => {
      const iconName = names(dirname(path).split(/[\\/]/).pop()!).className;
      return `mat${iconName}`;
    },
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@material-icons/svg/svg/**/outline.svg',
    output: 'packages/material-icons/outline/src/index.ts',
    getIconName: (name: string, path: string) => {
      const iconName = names(dirname(path).split(/[\\/]/).pop()!).className;
      return `mat${iconName}Outline`;
    },
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@material-icons/svg/svg/**/round.svg',
    output: 'packages/material-icons/round/src/index.ts',
    getIconName: (name: string, path: string) => {
      const iconName = names(dirname(path).split(/[\\/]/).pop()!).className;
      return `mat${iconName}Round`;
    },
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@material-icons/svg/svg/**/sharp.svg',
    output: 'packages/material-icons/sharp/src/index.ts',
    getIconName: (name: string, path: string) => {
      const iconName = names(dirname(path).split(/[\\/]/).pop()!).className;
      return `mat${iconName}Sharp`;
    },
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/iconoir/icons/**/*.svg',
    output: 'packages/iconoir/src/index.ts',
    getIconName: (name: string) => `iconoir${name}`,
  },
  {
    glob: 'node_modules/cryptocurrency-icons/svg/black/**/*.svg',
    output: 'packages/cryptocurrency-icons/src/index.ts',
    getIconName: (name: string) => `crypto${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/simple-icons/icons/**/*.svg',
    output: 'packages/simple-icons/src/index.ts',
    getIconName: (name: string) => `simple${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/typicons.font/src/svg**/*.svg',
    output: 'packages/typicons/src/index.ts',
    getIconName: (name: string) => `typ${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/dripicons/**/*.svg',
    output: 'packages/dripicons/src/index.ts',
    getIconName: (name: string) => `drip${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/UXAspects/**/*.svg',
    output: 'packages/ux-aspects/src/index.ts',
    getIconName: (name: string) => `aspects${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
  {
    glob: 'node_modules/@klarr-agency/circum-icons/**/*.svg',
    output: 'packages/circum-icons/src/index.ts',
    getIconName: (name: string) => `circum${name}`,
    svg: {
      colorAttr: 'fill',
    },
  },
];

export interface Iconset {
  glob: string;
  getIconName: (name: string, path: string) => string;
  output: string;
  svg?: SvgOptions;
  deprecated?: boolean;
  deprecatedMessage?: string;
}

export interface SvgOptions {
  colorAttr?: 'fill' | 'stroke';
  removeStroke?: boolean;
}
