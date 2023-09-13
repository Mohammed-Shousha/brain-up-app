import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ClassroomsIcon = (props: SvgProps) => (
  <Svg width={21} height={20} {...props}>
    <Path d="M1.432.496C.641.496 0 1.167 0 1.996v16c0 .83.64 1.5 1.432 1.5h18.136c.791 0 1.432-.67 1.432-1.5v-16c0-.829-.64-1.5-1.432-1.5H1.432Zm.477 2h17.182v15h-2.386v-.998H12.41v.999H1.91V2.495Zm8.591 4a1.4 1.4 0 0 0-1.013.44c-.268.28-.419.662-.419 1.06s.15.78.42 1.061a1.4 1.4 0 0 0 1.012.44 1.4 1.4 0 0 0 1.012-.44c.27-.281.42-.663.42-1.06 0-.399-.15-.78-.42-1.062a1.4 1.4 0 0 0-1.012-.439ZM6.682 8.247c-.593 0-1.075.504-1.075 1.124.008.293.125.57.325.775.2.204.47.318.75.318.279 0 .547-.114.748-.318.2-.204.317-.482.325-.775 0-.62-.48-1.124-1.073-1.124Zm7.636 0a1.03 1.03 0 0 0-.42.076 1.07 1.07 0 0 0-.36.242 1.13 1.13 0 0 0-.24.368 1.171 1.171 0 0 0 .24 1.245c.104.105.226.187.36.241.133.055.276.081.42.077.279-.009.544-.13.739-.34.195-.21.304-.492.304-.785 0-.292-.11-.574-.304-.784a1.052 1.052 0 0 0-.74-.34ZM10.5 10.496c-1.032 0-2.111.367-2.755.922a3.467 3.467 0 0 0-1.063-.172c-1.15 0-2.388.637-2.388 1.429v.821h12.412v-.821c0-.792-1.239-1.43-2.388-1.43a3.47 3.47 0 0 0-1.063.173c-.644-.555-1.723-.922-2.755-.922Z" />
  </Svg>
);

export default ClassroomsIcon;