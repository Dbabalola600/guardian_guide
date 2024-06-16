import {Dimensions, Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info';

const Screen = Dimensions.get('window');
export const SCREEN_WIDTH = Screen.width;
export const SCREEN_HEIGHT = Screen.height;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isMWeb = Platform.OS === 'web';
export const isIPad = Platform.isPad;
export const currentPlatform = Platform.OS;

export const logErrorWithMessage = (message, errorSource) => {
  if (__DEV__) {
    console.log(message, errorSource);
  }
};

// export const deviceId = DeviceInfo.getUniqueId();
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
//width, horizontals
// const horizontalScale = size => StyleSheet.scaleView(size);
const horizontalScale = size => (width / guidelineBaseWidth) * size;
//height, verticals
// const verticalScale = size => StyleSheet.scaleView(size);
const verticalScale = size => (height / guidelineBaseHeight) * size;
//text, radius etc
// const moderateScale = size => StyleSheet.scaleFont(size);
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, moderateScale, verticalScale};
