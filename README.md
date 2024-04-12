[![logo](./.github/files/logo-github.svg)](https://remixicon.com)

# Remix Icon For Angular
Remix Icon is a set of open-source neutral-style system symbols for designers and developers. Unlike a patchwork icon library, 2600+ icons are all elaborately crafted so that they are born with the gene of readability, consistency and perfect pixels. Each icon was designed in "Outlined" and "Filled" styles based on a 24x24 grid. Of course, all the icons are free for both personal and commercial use.


[![icon demo](./.github/files/preview.svg)](https://remixicon.com)
View the full set of Remix Icons at [remixicon.com](https://remixicon.com).

## Installation
```
npm install @remixicon/angular
# or
yarn add @remixicon/angular
# or
pnpm install @remixicon/angular
```

## Usage
```
import { Remixicons } from '@remixicon/angular';

@Component({
  selector: 'app-cmp',
  standalone: true,
  imports: [Remixicons],
  template: `
  <!-- Basic usage -->
  <remixicon iconName="ri-admin-line"/>
  <!-- withfixed width -->
  <remixicon iconName="ri-admin-line ri-fw"/>
  <!-- with font-size 0.5em -->
  <remixicon iconName="ri-admin-line ri-xxs"/>
  <!-- with font-size 0.75em -->
  <remixicon iconName="ri-admin-line ri-xs"/>
  ...
  
  <!-- More customization by providing the color and the custom size-->
  <remixicon iconName="ri-admin-line" color="red" size="24px"/>
  ...
  `,
})
export class MyComponent {...}
````