import React, { PureComponent } from 'react';

import {textStyle, pathStyle, debugStyle} from '../style/Styles.js';
import Colors from '../style/Colors';
import ToolTip from '../core/ToolTip';


class Launch extends PureComponent {

  render() {
    return (
        <g style={{cursor: 'pointer'}}>
          {this.props.showDebug ?
          <rect x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} style={debugStyle}/>
          : null}
          <g transform={"translate(" + (this.props.x + 5) + "," + (this.props.y + 5) + ") scale(0.8)"}>
          <circle cx='13' cy='13' r='20' style={{fill: Colors.lightBackground}} />
          <g transform={"translate(-2,0) scale(0.14)"}>
          <path style={pathStyle} d="M200,4.6c0-1-0.4-1.9-1.1-2.6c-0.5-0.5-1.1-0.8-1.8-1c-0.3-0.1-0.5-0.1-0.8-0.1c-0.2,0-1.1,0-2.6,0.1 c-10.3,0.6-48.4,4.6-74.1,30.3L82.5,68.4c-8.6-3-38-8.7-79.4,32.6c-1.3,1.3-1.4,3.2-0.4,4.7c0.1,0.2,0.2,0.3,0.4,0.5 c1.1,1.1,2.8,1.4,4.2,0.7C7.6,106.8,34,94,48,103l-9.2,9.2c-0.2,0.2-0.4,0.5-0.6,0.7c-0.2,0.4-3.6,6.4-1.5,15.7 c-5.8,3-10.4,8.2-13.7,13.8c-3.5,5.9-5.8,12.5-7.1,19.3c-0.8,4-1.1,8-1.2,12.1c0,2.2-0.2,5,0.6,7.1c1.1,3.1,4,5.1,7.2,5.3 c2.9,0.2,5.8,0.2,8.7,0c13.2-0.9,27.2-5.4,36.5-15.2c1.9-2.1,3.6-4.3,4.8-6.7c9.3,2,15.2-1.3,15.6-1.5c0.3-0.2,0.5-0.4,0.7-0.6 L98,153c9,14-3.8,40.4-3.9,40.7c-0.7,1.4-0.4,3.1,0.7,4.2c0,0,0,0,0.1,0.1c0.6,0.6,1.3,0.9,2.1,1h0.8c0.8-0.1,1.6-0.4,2.2-1.1 c0.1-0.1,0.1-0.1,0.2-0.2c41.2-41.3,35.5-70.6,32.4-79.2l37.1-37.1C199,52.1,200,6.6,200,4.6z M63.4,166.1c-2.9,0.7-5.8,1.3-8.8,1.8 c-7.2,1.3-14.6,1.8-21.9,1.6c-0.6,0-1.3-0.8-1.3-1.3c0-1.1,0-2.7,0.1-3.8c0-1.6,0.1-3.2,0.2-4.8c0.2-3.7,0.5-7.3,1-10.9 c0.9-6.2,2.3-12.2,4.6-18.1c1.7,5.8,5.4,12.6,13,20.2c7.5,7.5,14.4,11.3,20.1,12.9C68,164.6,65.8,165.5,63.4,166.1z M139.5,76.7 c-8.7,0-15.8-7.1-15.8-15.8S130.8,45,139.5,45s15.8,7.1,15.8,15.8S148.2,76.7,139.5,76.7z"/>
          </g>
          </g>
          <ToolTip {...this.props} text_width="70" tooltip={["Launch"]}/>
        </g>
    );
  }
}

export default Launch;
