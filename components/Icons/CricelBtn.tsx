import * as React from "react";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  ForeignObject,
  G,
  Path,
  SvgProps,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: div */
import { memo } from "react";
const CricelBtn = (props: SvgProps) => (
  <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
    <G clipPath="url(#a)" data-figma-skip-parse="true">
      <ForeignObject
        width={2485.38}
        height={2485.38}
        x={-1242.69}
        y={-1242.69}
        transform="matrix(-.01006 .02997 -.02997 -.01006 25.813 29.969)"
      ></ForeignObject>
    </G>
    <Circle
      cx={28}
      cy={28}
      r={28}
      data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.51774704456329346,"g":0.18106025457382202,"b":0.84601682424545288,"a":1.0},"position":0.30963182449340820},{"color":{"r":0.85745960474014282,"g":0.15820461511611938,"b":0.66166841983795166,"a":1.0},"position":0.58893930912017822},{"color":{"r":0.61544764041900635,"g":0.11337840557098389,"b":0.79185014963150024,"a":1.0},"position":1.0}],"stopsVar":[],"transform":{"m00":-20.125007629394531,"m01":-59.93750,"m02":65.843757629394531,"m10":59.93750,"m11":-20.125007629394531,"m12":10.062503814697266},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
    />
    <Path
      fill="#fff"
      d="M24.5 23.788c0-1.582 1.75-2.538 3.081-1.682l6.552 4.212a2 2 0 0 1 0 3.364l-6.552 4.212c-1.33.856-3.081-.1-3.081-1.682v-8.424Z"
    />
    <Defs>
      <ClipPath id="a">
        <Circle cx={28} cy={28} r={28} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default memo(CricelBtn);
