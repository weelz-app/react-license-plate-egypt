A react component for displaying an Egyptian license plate given the text value of the plate number. 

## How to use it

```
npm install react-license-plate-egypt
```
You can then import the `LicensePlate` react component anywhere in yor react app
```jsx
import LicensePlate from 'react-license-plate-egypt'

<LicensePlate number={'سجط ٢٥٩٤'} />
```
Which will display something like this

![screen-shot](https://github.com/weelz-app/react-license-plate-egypt/blob/main/sample_1.png?raw=true)

### Props

`LicensePlate` accepts 3 props:
* `number`: The text value of the plate which includes both the alphabetical and numeric parts of the plate. It has to be a valid Unicode string within the range of arabic characters. This component automatically detaches the letters for proper presentaion, it also displays the corresponding parts (digits/letters) on the correct sides (regardless of where they are in the string provided).
* `width`: The width in pixels. The component will preserver the aspect ratio of the plate so you don't have to set a height. Default value is `200px`.
* `vehicle`: The type of vehicle. This decides the color of the top part of the plate. You can import the enum `VehicleType` which contains all possible types. Default is `VehicleType.PRIVATE` which is presented as light blue.

### For example
```jsx
import LicensePlate from 'react-license-plate-egypt'
import {VehicleType} from 'react-license-plate-egypt'

<LicensePlate number={'سجط ٢٥٩٤'} vehicle={VehicleType.TAXI} width='600' />
```

Possible values for `VehicleType` and their corresponding colors are:
```jsx
export const VehicleType = {
  PRIVATE: '#0099FF',
  TAXI: '#FFA343',
  TRUCK: '#FF5733',
  BUSS: '#C4C4C4',
  TOURISIM: '#CBB58B',
  DIPLOMATIC: '#60AC54',
  CUSTOMS: '#F7CC5E'
}
```
