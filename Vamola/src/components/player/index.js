import React from 'react';
import { Text, View} from 'react-native';
import Video from 'react-native-video';
import style_Player from './styles_player';

const VideoPlayer = ({ navigation }) => {
  return (
    <View style={{backgroundColor:'#141414', flex: 1,}}> 

      <Video
        source={ require('../../assets/video_surpresa.mp4')} 
        style ={style_Player.Player}
        controls={true}
        resizeMode="contain"
      />
      
    </View>
  );
};

export default VideoPlayer