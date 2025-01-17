<img width="847" alt="logo" src="https://user-images.githubusercontent.com/20795331/142078474-da890691-b524-4144-9640-2f7f9da3a3a3.png">
 
# Ng Icons

The all-in-one icon library for Angular. This allows you to use icons from multiple icon sets with a single icon component.
Containing over 23,000 icons for you to use in your projects.

Currently, we support the following libraries:

- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Heroicons](https://heroicons.com/)
- [Ionicons](https://ionic.io/ionicons)
- [Material Icons](https://fonts.google.com/icons?selected=Material+Icons)
- [CSS.gg](https://css.gg/)
- [Feather Icons](https://feathericons.com/)
- [Jam Icons](https://jam-icons.com/)
- [Octicons](https://github.com/primer/octicons)
- [Radix UI Icons](https://icons.modulz.app/)
- [Tabler Icons](https://tabler-icons.io/)
- [Akar Icons](https://akaricons.com/)
- [Iconoir](https://iconoir.com/)
- [Cryptocurrency Icons](http://cryptoicons.co/)
- [Simple Icons](https://simpleicons.org/)
- [Typicons](https://www.s-ings.com/typicons/)
- [Dripicons](https://github.com/amitjakhu/dripicons)
- [UX Aspects](https://uxaspects.github.io/UXAspects/)
- [Circum Icons](https://circumicons.com/)

Got suggestions for additional iconsets? Create an issue and we can consider adding them!

## Supported Versions

| Angular Version | Ng Icon Version |
| --------------- | --------------- |
| 11.x.x          | 12.x.x          |
| 12.x.x          | 12.x.x - 13.x.x |
| 13.x.x          | 13.x.x - 17.x.x |
| 14.x.x          | 17.x.x - 22.x.x |

> **Note**: Ng Icons relies on modern browser features and is designed to work on evergreen browsers. We do not support older browsers such as IE11.

## Installation

You must install the `@ng-icons/core` package, however you only need to install the iconset libraries you intend to use.

E.g:

```bash
npm i @ng-icons/core @ng-icons/heroicons ...
```

or

```bash
yarn add @ng-icons/core @ng-icons/heroicons ...
```

## Packages

The following packages are available:

| Package                          | License      |
| -------------------------------- | ------------ |
| `@ng-icons/core`                 | MIT          |
| `@ng-icons/bootstrap-icons`      | MIT          |
| `@ng-icons/heroicons`            | MIT          |
| `@ng-icons/ionicons`             | MIT          |
| `@ng-icons/material-icons`       | Apache 2.0   |
| `@ng-icons/css.gg`               | MIT          |
| `@ng-icons/feather-icons`        | MIT          |
| `@ng-icons/jam-icons`            | MIT          |
| `@ng-icons/octicons`             | MIT          |
| `@ng-icons/radix-icons`          | MIT          |
| `@ng-icons/tabler-icons`         | MIT          |
| `@ng-icons/akar-icons`           | MIT          |
| `@ng-icons/iconoir`              | MIT          |
| `@ng-icons/cryptocurrency-icons` | CC0-1.0      |
| `@ng-icons/simple-icons`         | CC0-1.0      |
| `@ng-icons/typicons`             | CC-BY-SA-4.0 |
| `@ng-icons/dripicons`            | CC-BY-SA-4.0 |
| `@ng-icons/ux-aspects`           | Apache 2.0   |
| `@ng-icons/circum-icons`         | MPL-2.0      |

## Usage

Import the `NgIconsModule` and register the icons you wish to use:

```ts
import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ featherAirplay, heroUsers }),
  ],
})
export class AppModule {}
```

You can register icons in multiple modules, this allows icons to be lazy loaded in child modules.

You can then use the icon in your templates:

```html
<ng-icon name="featherAirplay"></ng-icon>
```

| Name        | Type                 | Description                                                                        |
| ----------- | -------------------- | ---------------------------------------------------------------------------------- |
| size        | `string`             | Define the size of the icon. This defaults to the current font size.               |
| color       | `string`             | Define the color of the icon. This defaults to the current text color.             |
| strokeWidth | `string` \| `number` | Define the stroke-width of the icon. This only works on iconsets that use strokes. |

### Standalone Components

As of version 18.0.0 Ng Icons nows supports standalone components. You can import icons using the `provideIcons` function which can be placed anywhere you can register providers. The optimal location
would be in the `@Component` providers array.

You can also import the component directly by importing `NgIconComponent` or the `NG_ICON_DIRECTIVES` constant.

```ts
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ featherAirplay, heroUsers })],
})
export class AppComponent {}
```
