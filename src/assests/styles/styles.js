import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../Themes/';

const styles = StyleSheet.create({
	container: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
		backgroundColor: Colors.snow,
	},

	header: {
		backgroundColor: '#0e1130',
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		...Platform.select({
			ios: {
				paddingTop: Metrics.HEIGHT * 0.02,
			},
			android: {
				paddingTop: Metrics.WIDTH * 0.04,
			},
		}),
		elevation: 0,
		paddingLeft: Metrics.WIDTH * 0.05,
		paddingRight: Metrics.WIDTH * 0.05,
	},

	left: {
		flex: 1,
	},

	body: {
		flex: 2,
		alignItems: 'center',
	},

	textTitle: {
		color: Colors.snow,
		fontSize: 18,
		alignSelf: 'center',
		fontFamily: "TajawalBold0",
	},

	right: {
		flex: 1,
		alignItems: 'center',
	},

	bagIcon: {
		marginLeft: Metrics.WIDTH * 0.04,
		color: Colors.snow,
	},

	heartIcon: {
		color: Colors.snow,
		alignSelf: 'center',
	},

	heartBg: {
		width: Metrics.WIDTH * 0.054,
		height: Metrics.WIDTH * 0.054,
		borderRadius: Metrics.WIDTH * 0.027,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: Colors.snow,
		alignItems: 'center',
		justifyContent: 'center',
	},

	rowBg: {
		width: "100%", marginLeft: 10, height: 300, marginTop: 10 

	},

	shareDetailHeader: {
		height: Metrics.HEIGHT * 0.1,
		flexDirection: 'row',
		paddingLeft: Metrics.WIDTH * 0.05,
		paddingRight: Metrics.WIDTH * 0.05,

		backgroundColor: Colors.snow,
	},

	shareDetailsBg: {
		width: Metrics.WIDTH * 0.3,
		flexDirection: 'row',
		justifyContent: 'center',
		// backgroundColor: '#f47b32',
		backgroundColor: '#f4b232',
	},

	shareDetailsTxt: {
		color: '#0e1130',
		fontSize: 18,
		// fontFamily: Fonts.type.sfuiDisplayLight,
	},

	horizontalDivider: {
		backgroundColor: '#b5b5b5',
		width: Metrics.WIDTH * 0.002,
	},

	productTitlePriceBg: {
		width: Metrics.WIDTH * 0.65,
		paddingLeft: Metrics.WIDTH * 0.005,
		paddingRight: Metrics.WIDTH * 0.04,
		justifyContent: 'center',
		flexDirection: 'column',
		paddingTop: Metrics.WIDTH * 0.03,
		paddingBottom: Metrics.WIDTH * 0.03,
	},

	productImage: {
		width: Dimensions.get('window').width/1.06,
		height: "100%", 
		 marginTop: -10,
		//   flex: 1,
	  justifyContent:'space-between'

	},

	productPriceBg: {
		flexDirection: 'row',
	},

	newPriceTxt: {
		color: '#ff0000',
		fontSize: 18,
		// fontFamily: Fonts.type.sfuiDisplayLight,
		paddingLeft: Metrics.WIDTH * 0.02,
	},

	heartBgblack: {
		position: 'absolute',
		width: Metrics.WIDTH * 0.058,
		height: Metrics.WIDTH * 0.058,
		right: Metrics.WIDTH * 0.03,
		top: Metrics.WIDTH * 0.03,
	},

	heartImg: {
		width: Metrics.WIDTH * 0.058,
		height: Metrics.WIDTH * 0.058,
		resizeMode: 'contain',
	},

	colorTxtBg: {
		position: 'absolute',
		right: 0,
		backgroundColor: Colors.snow,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		paddingTop: Metrics.WIDTH * 0.02,
		paddingLeft: Metrics.WIDTH * 0.035,
		paddingRight: Metrics.WIDTH * 0.035,
		paddingBottom: Metrics.WIDTH * 0.01,
		marginTop: Metrics.HEIGHT * 0.25,
	},

	sizeTxtBg: {
		position: 'absolute',
		right: 0,
		backgroundColor: Colors.snow,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		paddingTop: Metrics.WIDTH * 0.015,
		paddingLeft: Metrics.WIDTH * 0.04,
		paddingRight: Metrics.WIDTH * 0.04,
		paddingBottom: Metrics.WIDTH * 0.03,
		marginTop: Metrics.HEIGHT * 0.4,
	},

	sliderBG: {
		height: Dimensions.get('window').height/2.20,
		width: Dimensions.width,
	},

	btnSec: {
		width: Metrics.WIDTH * 0.9,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: Metrics.WIDTH * 0.05,
	},

	btnBg: {
		width: Metrics.WIDTH * 0.435,
		borderRadius: 5,
		paddingTop: Metrics.WIDTH * 0.02,
		paddingBottom: Metrics.WIDTH * 0.02,
		justifyContent: 'center',
		alignItems: 'center',
	},

	btnText: {
		fontSize: 18,
		// fontFamily: Fonts.type.sfuiDisplayLight
	},

	dot: {
		width: Metrics.WIDTH * 0.02,
		height: Metrics.WIDTH * 0.02,
		borderRadius: Metrics.WIDTH * 0.01,
	},

	rowDot: {
		marginBottom: Metrics.WIDTH * 0.012,
	},

	dotListBg: {
		height: Metrics.HEIGHT * 0.09,
		width: Metrics.WIDTH * 0.03,
		marginTop: Metrics.HEIGHT * 0.29,
		marginLeft: 20,
		marginTop:Dimensions.get('window').height/5.20,
		position: 'absolute',
	},

	rowColorView: {
		width: Metrics.WIDTH * 0.18,
		height: Metrics.HEIGHT * 0.9,
		marginTop: Metrics.WIDTH * 0.01,
		backgroundColor: Colors.snow,
		position: 'absolute',
		right: 0,
	},

	colorViewer: {
		height: Metrics.WIDTH * 0.08,
		width: Metrics.WIDTH * 0.08,
		margin: Metrics.WIDTH * 0.02,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
	},

	colorTouchable: {
		paddingLeft: Metrics.WIDTH * 0.02,
		paddingRight: Metrics.WIDTH * 0.02,
	},

	colorListBg: {
		margin: Metrics.WIDTH * 0.02,
		height: Metrics.HEIGHT * 0.055,
		backgroundColor: Colors.snow,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 2,
	},

	productColorImg: {
		height: Metrics.HEIGHT * 0.12,
		width: Metrics.WIDTH * 0.12,
		alignSelf: 'center',
	},

	modalView: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
		backgroundColor: '#0006',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
	},

	modal: {
		width: Metrics.WIDTH * 0.8,
		backgroundColor: '#ebebeb',
		paddingTop: Metrics.WIDTH * 0.024,
		borderRadius: 5,
	},

	modalHeader: {
		backgroundColor: '#ebebeb',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingBottom: Metrics.WIDTH * 0.024,
		paddingLeft: Metrics.WIDTH * 0.03,
		paddingRight: Metrics.WIDTH * 0.03,
	},

	modalBottomView: {
		backgroundColor: Colors.snow,
		paddingLeft: Metrics.WIDTH * 0.03,
		paddingRight: Metrics.WIDTH * 0.03,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},

	cancelApplyTxt: {
		color: '#0691ce',
		fontSize: 18,
		//  fontFamily: Fonts.type.sfuiDisplayLight
	},

	shareTxt: {
		color: '#0e1130',
		fontSize:18,
		//  fontFamily: Fonts.type.sfuiDisplayLight
	},

	modalRow: {
		flexDirection: 'row',
		marginTop: Metrics.WIDTH * 0.02,
		marginBottom: Metrics.WIDTH * 0.024,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: Colors.snow,
	},

	socialBtnBg: {
		width: Metrics.WIDTH * 0.07,
		height: Metrics.WIDTH * 0.07,
		borderRadius: Metrics.WIDTH * 0.035,
		alignItems: 'center',
		justifyContent: 'center',
	},

	socialTxt: {
		fontSize: 18,
		//  fontFamily: Fonts.type.sfuiDisplayLight,
		marginLeft: Metrics.WIDTH * 0.04,
	},

	chBox: {
		width: Metrics.WIDTH * 0.06,
		height: Metrics.WIDTH * 0.05,
		backgroundColor: Colors.snow,
		alignSelf: 'flex-end',
	},

	modalDivider: {
		width: Metrics.WIDTH * 0.77,
		height: 1,
		backgroundColor: '#ebebeb',
	},

	socialIcon: {
		width: Metrics.WIDTH * 0.042,
		height: Metrics.WIDTH * 0.035,
		resizeMode: 'contain',
	},

	facebookIcon: {
		width: Metrics.WIDTH * 0.045,
		height: Metrics.WIDTH * 0.04,
		resizeMode: 'contain',
	},

	//size model styles
	modalViewShadowBg: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
		backgroundColor: 'transparent',
	},

	modalBg: {
		backgroundColor: 'white',
		borderRadius: 5,
		...Platform.select({
			ios: {
				bottom: Metrics.HEIGHT * 0.02,
			},
			android: {
				bottom: Metrics.HEIGHT * 0.07,
			},
		}),
		position: 'absolute',
		width: Metrics.WIDTH * 0.9,
		flexDirection: 'row',
		alignSelf: 'center',
	},

	sizeList: {
		margin: Metrics.WIDTH * 0.01,
		height: Metrics.HEIGHT * 0.065,
		width: Metrics.HEIGHT * 0.065,
		backgroundColor: Colors.snow,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 2,
	},

	sizeBtnTxt: {
		width: Metrics.HEIGHT * 0.08,
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		color: '#ffc700',
		marginRight: Metrics.WIDTH * 0.01,
		fontSize: 18
	},

	likeHeart: {
		textAlign: 'center',
		position: 'absolute',
		bottom: Metrics.HEIGHT * 0.002,
	},

	share: {
		position: 'absolute',
		bottom: Metrics.HEIGHT * 0.003,
		left: Metrics.HEIGHT * 0.006,
	},

	alertBg: {
		width: Metrics.WIDTH * 0.03,
		height: Metrics.WIDTH * 0.03,
		borderRadius: Metrics.WIDTH * 0.015,
		backgroundColor: '#ff0000',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -(Metrics.WIDTH * 0.018),
	},

	alertTxt: {
		fontSize: 18,
		fontFamily: "TajawalBold0",
		color: Colors.snow,
	},
});

export default styles;
