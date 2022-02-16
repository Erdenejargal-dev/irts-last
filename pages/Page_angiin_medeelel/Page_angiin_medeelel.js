import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Rectangle_3_link} from './assets/imageLinks.js'
import {image_Rectangle_5_link} from './assets/imageLinks.js'
import {image_Rectangle_7_link} from './assets/imageLinks.js'
import {image_Rectangle_9_link} from './assets/imageLinks.js'
import {image_Rectangle_12_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_6_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_7_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_8_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_5_link} from './assets/imageLinks.js'
import {image_Rectangle_Copy_9_link} from './assets/imageLinks.js'
const Page_angiin_medeelel  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page0}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._grocery_mpbile_}    >
					<View style = {noneModeStyles._layer_c9b98f}    >
						<View style = {noneModeStyles._layer_2e15c6}   >
							<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
								<Path fill = {"#313233"}     d = "M8.49999 17L10.0015 15.4985L4.07185 9.54341H17V7.45658H4.07185L10.0015 1.5015L8.49999 0L0 8.49999L8.49999 17Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.__}    >
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App}   >
						АНГИЙН МЭДЭЭЛЭЛ
					</Text>
				</View>
				<View style = {noneModeStyles._details}    >
					<Text style = {noneModeStyles._With_your_Grocery_de}   >
						Ш. Амгалан багшийн дааж авсан анги бөгөөд Математик болон физикийн сонгоны сонгоны анги
					</Text>
					<View style = {noneModeStyles.___2}    >
					</View>
					<Text style = {noneModeStyles._Due_date}   >
						ОГНОО
					</Text>
					<Text style = {noneModeStyles._12_March_2021__19_00}   >
						12 March 2021, 19:00
					</Text>
					<Text style = {noneModeStyles._Project}   >
						БАГШ
					</Text>
					<Text style = {noneModeStyles._Grocery_Mobile_App_2}   >
						Ш. АМГАЛАН
					</Text>
					<Text style = {noneModeStyles._Status}   >
						НӨХЦӨЛ
					</Text>
					<Text style = {noneModeStyles._Description}   >
						МЭДЭЭЛЭЛ
					</Text>
					<Text style = {noneModeStyles._Team_member}   >
						ХҮҮХДҮҮД
					</Text>
					<Text style = {noneModeStyles._Attachment}   >
						ФАЙЛ
					</Text>
					<Text style = {noneModeStyles._On_Progress}   >
						ИРЦ БҮРТГЭГДСЭН
					</Text>
					<View style = {noneModeStyles._Rectangle}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_4}    >
					</View>
					<View style = {noneModeStyles.___3}    >
					</View>
					<View style = {noneModeStyles.___4}    >
					</View>
					<View style = {noneModeStyles.___5}    >
					</View>
					<View style = {noneModeStyles.___6}    >
					</View>
					<View style = {noneModeStyles._Group_18}    >
						<View style = {noneModeStyles._Rectangle_2}    >
							<View style = {noneModeStyles._Mask}    >
							</View>
							<View style = {noneModeStyles._Mask_2}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container}    >
								<View style = {noneModeStyles._Rectangle_3}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_3_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Rectangle_4}    >
							<View style = {noneModeStyles._Mask_3}    >
							</View>
							<View style = {noneModeStyles._Mask_4}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container_2}    >
								<View style = {noneModeStyles._Rectangle_5}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_5_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Rectangle_6}    >
							<View style = {noneModeStyles._Mask_5}    >
							</View>
							<View style = {noneModeStyles._Mask_6}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container_3}    >
								<View style = {noneModeStyles._Rectangle_7}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_7_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_17}    >
							<View style = {noneModeStyles._Rectangle_8}    >
								<View style = {noneModeStyles._Rectangle_container_4}    >
									<View style = {noneModeStyles._Rectangle_9}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_9_link}}/>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles._Rectangle_10}    >
						</View>
						<View style = {noneModeStyles._layer_f5d038}    >
							<View style = {noneModeStyles._layer_25a5a4}   >
								<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
									<Path fill = {"white"}     d = "M6.84535 12V6.84535H12V5.15463H6.84535V0H5.15463V5.15463H0V6.84535H5.15463V12H6.84535Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_Copy}    >
						<View style = {noneModeStyles._Rectangle_11}    >
						</View>
						<View style = {noneModeStyles._layer_5f0e00}    >
							<View style = {noneModeStyles._layer_b149e3}   >
								<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
									<Path fill = {"white"}     d = "M6.84535 12V6.84535H12V5.15463H6.84535V0H5.15463V5.15463H0V6.84535H5.15463V12H6.84535Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._layer_f7b180}    >
						<View style = {noneModeStyles._layer_1d983f}   >
							<Svg style={{height: 18, width: 14}} viewBox = "0 0 14 18">
								<Path fill = {"#313233"}     d = "M2.42424 17.4189C3.1617 17.8277 3.94485 18.0208 4.77369 17.9982C5.60254 17.9756 6.37307 17.7497 7.08529 17.3204C7.7975 16.8911 8.3613 16.3017 8.77667 15.5524L13.504 7.0241L12.3978 6.41094L7.67049 14.9392C7.37379 15.4745 6.96307 15.8999 6.43831 16.2154C5.91355 16.5309 5.34936 16.7002 4.74573 16.7233C4.1421 16.7463 3.57266 16.6095 3.03741 16.3128C2.50216 16.0161 2.08139 15.604 1.7751 15.0766C1.46881 14.5492 1.30744 13.9777 1.291 13.3622C1.27457 12.7467 1.41469 12.1713 1.71139 11.636L6.84418 2.37625C7.02879 2.0432 7.28809 1.77877 7.62209 1.58296C7.9561 1.38715 8.31363 1.28213 8.6947 1.2679C9.07576 1.25366 9.43282 1.33885 9.76586 1.52346C10.0989 1.70807 10.3604 1.96573 10.5502 2.29643C10.7401 2.62714 10.8375 2.98435 10.8425 3.36807C10.8475 3.75178 10.7577 4.11016 10.5731 4.44321L6.25125 12.24C6.13257 12.4541 5.96693 12.5916 5.75432 12.6526C5.54171 12.7136 5.32836 12.6847 5.11426 12.566C4.90016 12.4473 4.75668 12.2784 4.68382 12.0592C4.61096 11.84 4.63387 11.6234 4.75255 11.4093L8.6689 4.34397L7.54488 3.72092L3.62853 10.7862C3.44392 11.1192 3.35873 11.4763 3.37296 11.8574C3.3872 12.2384 3.49387 12.593 3.69298 12.921C3.89208 13.2491 4.15816 13.5054 4.4912 13.69C4.82425 13.8747 5.17668 13.9612 5.5485 13.9496C5.92033 13.938 6.26862 13.8356 6.59338 13.6425C6.91813 13.4493 7.17282 13.1862 7.35743 12.8532L11.6793 5.05637C11.976 4.52112 12.1191 3.94739 12.1086 3.33516C12.0981 2.72293 11.941 2.15773 11.6374 1.63957C11.3337 1.1214 10.9143 0.713972 10.379 0.417279C9.84378 0.120586 9.27137 -0.0178933 8.66179 0.00184074C8.05221 0.0215748 7.48372 0.184588 6.95631 0.490879C6.4289 0.797171 6.01685 1.21794 5.72016 1.75319L0.587365 11.013C0.171995 11.7623 -0.0230725 12.5561 0.00216282 13.3941C0.0273981 14.2322 0.253024 15.0104 0.679039 15.7285C1.10505 16.4467 1.68679 17.0102 2.42424 17.4189Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_container_5}    >
						<View style = {noneModeStyles._Rectangle_12}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_12_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_6_container}    >
						<View style = {noneModeStyles._Rectangle_Copy_6}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_6_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_7_container}    >
						<View style = {noneModeStyles._Rectangle_Copy_7}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_7_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_8_container}    >
						<View style = {noneModeStyles._Rectangle_Copy_8}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_8_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_5_container}    >
						<View style = {noneModeStyles._Rectangle_Copy_5}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_5_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_9_container}    >
						<View style = {noneModeStyles._Rectangle_Copy_9}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_Copy_9_link}}/>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_angiin_medeelel

const noneModeStyles = StyleSheet.create({
_page0: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_grocery_mpbile_: {
	width: 339.016,
	height: 25,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 19.984,
	top: 64,
	},
_layer_c9b98f: {
	position: "absolute",
	transform: [
		{translateY: 3.58401},
	],
	},
_layer_2e15c6: {
	},
__: {
	width: 4.03198,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 325},
		{translateY: 3.58401},
	],
	},
_Grocery_Mobile_App: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 88.016},
		{translateY: -10.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_details: {
	width: 375,
	height: 718,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 66,
	},
_With_your_Grocery_de: {
	width: 343,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -74},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___2: {
	width: 19.968,
	height: 19.968,
	position: "absolute",
	transform: [
		{translateX: 18.016},
		{translateY: 61.616},
	],
	},
_Due_date: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 47},
		{translateY: -296},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_12_March_2021__19_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 202},
		{translateY: -298},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Project: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 48},
		{translateY: -234},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Grocery_Mobile_App_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 271},
		{translateY: -232},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Status: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 47},
		{translateY: -171},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Description: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 44},
		{translateY: -107},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Team_member: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 49},
		{translateY: 31},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Attachment: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 51},
		{translateY: 149},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_On_Progress: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 236},
		{translateY: -172},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 100},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 165},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_2: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 230},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_3: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 365},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Rectangle_Copy_4: {
	width: 375,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 484},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
___3: {
	width: 19.968,
	height: 18.984,
	position: "absolute",
	transform: [
		{translateX: 18.016},
		{translateY: 122.616},
	],
	},
___4: {
	width: 18.036,
	height: 17.976,
	position: "absolute",
	transform: [
		{translateX: 18.964},
		{translateY: 188.6},
	],
	},
___5: {
	width: 20,
	height: 20,
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 253},
	],
	},
___6: {
	width: 22.032,
	height: 13.968,
	position: "absolute",
	transform: [
		{translateX: 16.984},
		{translateY: 393.616},
	],
	},
_Group_18: {
	width: 125.833,
	height: 47.8333,
	position: "absolute",
	left: 17,
	top: 421,
	},
_Rectangle_2: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 0,
	top: 2,
	},
_Mask: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_2: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.10001},
		{translateY: -2.73333},
	],
	},
_Rectangle_3: {
	width: "100%",
	height: "100%",
	},
_Rectangle_4: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 28,
	top: 2,
	},
_Mask_3: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_4: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_2: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.10001},
		{translateY: -1.36667},
	],
	},
_Rectangle_5: {
	width: "100%",
	height: "100%",
	},
_Rectangle_6: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 57,
	top: 2,
	},
_Mask_5: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Mask_6: {
	width: 41,
	height: 41,
	position: "absolute",
	},
_Rectangle_container_3: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	transform: [
		{translateX: -4.10001},
		{translateY: -2.73333},
	],
	},
_Rectangle_7: {
	width: "100%",
	height: "100%",
	},
_Group_17: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	left: 78,
	top: 0,
	},
_Rectangle_8: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_container_4: {
	width: 47.8333,
	height: 47.8333,
	position: "absolute",
	},
_Rectangle_9: {
	width: "100%",
	height: "100%",
	borderRadius: 25,
	},
_Group: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 329,
	top: 386,
	},
_Rectangle_10: {
	width: 30,
	height: 30,
	backgroundColor: "rgb(92, 104, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_layer_f5d038: {
	position: "absolute",
	transform: [
		{translateX: 9.17999},
		{translateY: 9.18},
	],
	},
_layer_25a5a4: {
	},
_Group_Copy: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 329,
	top: 502,
	},
_Rectangle_11: {
	width: 30,
	height: 30,
	backgroundColor: "rgb(92, 104, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_layer_5f0e00: {
	position: "absolute",
	transform: [
		{translateX: 9.17999},
		{translateY: 9.17999},
	],
	},
_layer_b149e3: {
	},
_layer_f7b180: {
	position: "absolute",
	transform: [
		{translateX: 21.9449},
		{translateY: 507.746},
	],
	},
_layer_1d983f: {
	},
_Rectangle_container_5: {
	width: 104,
	height: 74,
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 553},
	],
	},
_Rectangle_12: {
	width: "100%",
	height: "100%",
	borderRadius: 4,
	},
_Rectangle_Copy_6_container: {
	width: 104,
	height: 74,
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 644},
	],
	},
_Rectangle_Copy_6: {
	width: "100%",
	height: "100%",
	borderRadius: 4,
	},
_Rectangle_Copy_7_container: {
	width: 104,
	height: 74,
	position: "absolute",
	transform: [
		{translateX: 263},
		{translateY: 552},
	],
	},
_Rectangle_Copy_7: {
	width: "100%",
	height: "100%",
	borderRadius: 4,
	},
_Rectangle_Copy_8_container: {
	width: 104,
	height: 74,
	position: "absolute",
	transform: [
		{translateX: 263},
		{translateY: 643},
	],
	},
_Rectangle_Copy_8: {
	width: "100%",
	height: "100%",
	borderRadius: 4,
	},
_Rectangle_Copy_5_container: {
	width: 104,
	height: 74,
	position: "absolute",
	transform: [
		{translateX: 143},
		{translateY: 553},
	],
	},
_Rectangle_Copy_5: {
	width: "100%",
	height: "100%",
	borderRadius: 4,
	},
_Rectangle_Copy_9_container: {
	width: 104,
	height: 74,
	position: "absolute",
	transform: [
		{translateX: 143},
		{translateY: 644},
	],
	},
_Rectangle_Copy_9: {
	width: "100%",
	height: "100%",
	borderRadius: 4,
	},
})

