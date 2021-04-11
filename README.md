A react component for displaying an Egyptian license plate given the text value of the plate number. 

## How to use it

```
npm install react-license-plate-egypt
```
You can then import the `LicensePlate` react component and use it anywhere in your react app

### For example
```jsx
import LicensePlate from 'react-license-plate-egypt'

<LicensePlate number={'سجط ٢٥٩٤'} />
```
Pass the plate number in arabic, no spaces or disjoint letters required as the component will extract the letters and digits and display them appropriately.

![private plate sample](https://github.com/weelz-app/react-license-plate-egypt/blob/main/sample_1.png?raw=true)

## Props

`LicensePlate` accepts 3 props:
* `number`: The text value of the plate which includes both the alphabetic and numeric parts of the plate. It has to be a valid Unicode string. The digits have to be within the range `[\u0660-\u0669]` and the letters can be any other unicode character. The letters don't have to be disjoint or have any spaces between them since they will automatically be converted to disjoint letters for accurate presentation, it also always displays the corresponding parts (digits/letters) on the correct sides (regardless of where they are in the string provided).
* `width`: A string indicating the width value in pixels (e.g. `'300'`). The component will preserve the aspect ratio of the plate so you don't have to set a height. The default value for width is `'200'`.
* `vehicle`: A string with the hex color code to illustrate the type of the vehicle. You can import the const variable `VehicleType` which contains all valid vehicle types in Egypt. Default is `VehicleType.PRIVATE` which is displayed as light blue.

### For example
This will display a larger plate (600px wide) with an orange color representing a taxi

```jsx
import LicensePlate from 'react-license-plate-egypt'
import {VehicleType} from 'react-license-plate-egypt'

<LicensePlate number={'سجط ٢٥٩٤'} vehicle={VehicleType.TAXI} width='600' />
```

![taxi plate](https://github.com/weelz-app/react-license-plate-egypt/blob/main/sample_2.png?raw=true)


### VehicleType
Possible values for `VehicleType` and their corresponding colors are:
```jsx
export const VehicleType = {
  PRIVATE: '#0099FF',
  TAXI: '#FFA343',
  TRUCK: '#FF5733',
  BUSS: '#C4C4C4',
  TOURISM: '#CBB58B',
  DIPLOMATIC: '#60AC54',
  CUSTOMS: '#F7CC5E'
}
```
