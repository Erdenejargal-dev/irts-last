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
import {image_Rectangle_2_link} from './assets/imageLinks.js'
import {image_Rectangle_10_link} from './assets/imageLinks.js'
import {image_Rectangle_12_link} from './assets/imageLinks.js'
import {image_Rectangle_14_link} from './assets/imageLinks.js'
import {image_Rectangle_17_link} from './assets/imageLinks.js'
import {image_loupe_1_link} from './assets/imageLinks.js'
import {image_Rectangle_25_link} from './assets/imageLinks.js'
import {image_Rectangle_27_link} from './assets/imageLinks.js'
import {image_Rectangle_29_link} from './assets/imageLinks.js'
import {image_Rectangle_32_link} from './assets/imageLinks.js'
const Page_nuur  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
			<View style = {noneModeStyles._greeetings}    >
				<View style = {noneModeStyles._Group}    >
					<Text style = {noneModeStyles._Tavtai_moril}   >
						Тавтай морил
					</Text>
					<Text style = {noneModeStyles._Maria_Tram}   >
						М. Батболд
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle}    >
					<View style = {noneModeStyles._Mask}    >
					</View>
					<View style = {noneModeStyles._Mask_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container}    >
						<View style = {noneModeStyles._Rectangle_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_2_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._notification}    >
				<View style = {noneModeStyles.__}    >
				</View>
				<View style = {noneModeStyles.___2}    >
				</View>
			</View>
			<View style = {noneModeStyles._search_field}    >
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<View style = {noneModeStyles._Group_3}    >
					<Text style = {noneModeStyles._Search_task}   >
						ХАЙХ
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._categories}    >
				<View style = {noneModeStyles._Rectangle_4}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy}    >
				</View>
				<Text style = {noneModeStyles._All_task}   >
					ИРЦ
				</Text>
				<Text style = {noneModeStyles._In_Progress}   >
					ТАСАЛСАН
				</Text>
			</View>
			<View style = {noneModeStyles._bottom_bar}    >
				<View style = {noneModeStyles._Bottom_bar}    >
					<View style = {noneModeStyles._Rectangle_Copy_16}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_11}    >
					<View style = {noneModeStyles._Group_7}    >
						<View style = {noneModeStyles._Shape}    >
						</View>
						<Text style = {noneModeStyles._Home}   >
							НҮҮР
						</Text>
					</View>
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles._Group_5}    >
							<View style = {noneModeStyles._Group_10}    >
								<View style = {noneModeStyles._Oval}    >
								</View>
								<View style = {noneModeStyles._layer_34d9ae}    >
									<View style = {noneModeStyles._layer_8b9681}   >
										<Svg style={{height: 21, width: 21}} viewBox = "0 0 21 21">
											<Path fill = {"white"}     d = "M11.9794 21V11.9794H21V9.02062H11.9794V0H9.02062V9.02062H0V11.9794H9.02062V21H11.9794Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_6}    >
						<View style = {noneModeStyles.___3}    >
						</View>
						<Text style = {noneModeStyles._Profile}   >
							БҮРТГЭЛ
						</Text>
					</View>
					<View style = {noneModeStyles._Group_9}    >
						<View style = {noneModeStyles.___4}    >
						</View>
						<Text style = {noneModeStyles._Activity}   >
							ИРЦ
						</Text>
					</View>
					<View style = {noneModeStyles._Group_8}    >
						<View style = {noneModeStyles.___5}    >
						</View>
						<Text style = {noneModeStyles._Folder}   >
							ИДЭВХИ
						</Text>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._medical_app_web_design}    >
				<View style = {noneModeStyles._Rectangle_5}    >
				</View>
				<Text style = {noneModeStyles._Medial_Web_Design}   >
					Технологи
				</Text>
				<Text style = {noneModeStyles._Website_that_the_cus}   >
					Сэдэв : Электроникийн эд ангиудын тэмдэг
				</Text>
				<View style = {noneModeStyles._Group_14}    >
					<View style = {noneModeStyles._Rectangle_6}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Done__100__}   >
					ИРЦ 40/40
				</Text>
				<View style = {noneModeStyles._Rectangle_7}    >
				</View>
				<View style = {noneModeStyles._Group_15}    >
					<View style = {noneModeStyles._Rectangle_8}    >
					</View>
					<Text style = {noneModeStyles._Complete}   >
						2-р цаг
					</Text>
				</View>
				<View style = {noneModeStyles._Group_18}    >
					<View style = {noneModeStyles._Rectangle_9}    >
						<View style = {noneModeStyles._Mask_3}    >
						</View>
						<View style = {noneModeStyles._Mask_4}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container_2}    >
							<View style = {noneModeStyles._Rectangle_10}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_10_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_11}    >
						<View style = {noneModeStyles._Mask_5}    >
						</View>
						<View style = {noneModeStyles._Mask_6}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container_3}    >
							<View style = {noneModeStyles._Rectangle_12}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_12_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_13}    >
						<View style = {noneModeStyles._Mask_7}    >
						</View>
						<View style = {noneModeStyles._Mask_8}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container_4}    >
							<View style = {noneModeStyles._Rectangle_14}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_14_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_17}    >
						<View style = {noneModeStyles._Rectangle_15}    >
							<View style = {noneModeStyles._Mask_9}    >
								<View style = {noneModeStyles._Mask_10}    >
								</View>
								<View style = {noneModeStyles._Mask_11}    >
								</View>
								<View style = {noneModeStyles._Rectangle_16}    >
								</View>
							</View>
							<View style = {noneModeStyles._Rectangle_container_5}    >
								<View style = {noneModeStyles._Rectangle_17}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_17_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_16}    >
							<View style = {noneModeStyles._Rectangle_Copy_5}    >
								<View style = {noneModeStyles._Mask_12}    >
									<View style = {noneModeStyles._Mask_13}    >
									</View>
									<View style = {noneModeStyles._Mask_14}    >
									</View>
									<View style = {noneModeStyles._Rectangle_18}    >
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_19}    >
								</View>
							</View>
							<Text style = {noneModeStyles._3_}   >
								3+
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_19}    >
					<View style = {noneModeStyles.___6}    >
					</View>
					<Text style = {noneModeStyles._Create_by_Maria_Lim}   >
						БАГШ : ЭНХЖИН
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._loupe_1_container}    >
				<View style = {noneModeStyles._loupe_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_loupe_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._grocery_mobile_app}    >
				<View style = {noneModeStyles._Rectangle_20}    >
				</View>
				<Text style = {noneModeStyles._Grocery_Mobile_App}   >
					Математик
				</Text>
				<Text style = {noneModeStyles._Mobile_App_that_the}   >
					Сэдэв : Тоо тоолол
				</Text>
				<View style = {noneModeStyles._Group_14_2}    >
					<View style = {noneModeStyles._Rectangle_21}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_4}    >
					</View>
				</View>
				<Text style = {noneModeStyles._In_Progress__40__}   >
					ИРЦ 32/40
				</Text>
				<View style = {noneModeStyles._Rectangle_22}    >
				</View>
				<View style = {noneModeStyles._Group_15_2}    >
					<View style = {noneModeStyles._Rectangle_23}    >
					</View>
					<Text style = {noneModeStyles._4_days_left}   >
						1-р цаг
					</Text>
				</View>
				<View style = {noneModeStyles._Group_18_2}    >
					<View style = {noneModeStyles._Rectangle_24}    >
						<View style = {noneModeStyles._Mask_15}    >
						</View>
						<View style = {noneModeStyles._Mask_16}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container_6}    >
							<View style = {noneModeStyles._Rectangle_25}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_25_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_26}    >
						<View style = {noneModeStyles._Mask_17}    >
						</View>
						<View style = {noneModeStyles._Mask_18}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container_7}    >
							<View style = {noneModeStyles._Rectangle_27}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_27_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_28}    >
						<View style = {noneModeStyles._Mask_19}    >
						</View>
						<View style = {noneModeStyles._Mask_20}    >
						</View>
						<View style = {noneModeStyles._Rectangle_container_8}    >
							<View style = {noneModeStyles._Rectangle_29}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_29_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_17_2}    >
						<View style = {noneModeStyles._Rectangle_30}    >
							<View style = {noneModeStyles._Mask_21}    >
								<View style = {noneModeStyles._Mask_22}    >
								</View>
								<View style = {noneModeStyles._Mask_23}    >
								</View>
								<View style = {noneModeStyles._Rectangle_31}    >
								</View>
							</View>
							<View style = {noneModeStyles._Rectangle_container_9}    >
								<View style = {noneModeStyles._Rectangle_32}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_32_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_16_2}    >
							<View style = {noneModeStyles._Rectangle_Copy_5_2}    >
								<View style = {noneModeStyles._Mask_24}    >
									<View style = {noneModeStyles._Mask_25}    >
									</View>
									<View style = {noneModeStyles._Mask_26}    >
									</View>
									<View style = {noneModeStyles._Rectangle_33}    >
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_34}    >
								</View>
							</View>
							<Text style = {noneModeStyles._3__2}   >
								3+
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_19_2}    >
					<View style = {noneModeStyles.___7}    >
					</View>
					<Text style = {noneModeStyles._Create_by_Maria_Lim_2}   >
						БАГШ : ОЧИРОО
					</Text>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_nuur

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_greeetings: {
	width: 179,
	height: 50,
	position: "absolute",
	left: 16,
	top: 108,
	},
_Group: {
	width: 117,
	height: 50,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 62,
	top: 0,
	},
_Tavtai_moril: {
	width: 150,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Maria_Tram: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	color: "rgb(49, 50, 51)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_2: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_container: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_2: {
	width: "100%",
	height: "100%",
	},
_notification: {
	width: 336.016,
	height: 19.512,
	position: "absolute",
	left: 19,
	top: 66.072,
	},
__: {
	width: 18,
	height: 12,
	position: "absolute",
	left: 0,
	top: 3.52802,
	},
___2: {
	width: 16.032,
	height: 19.512,
	position: "absolute",
	left: 319.984,
	top: 0,
	},
_search_field: {
	width: 343,
	height: 53,
	position: "absolute",
	left: 16,
	top: 178,
	},
_Rectangle_3: {
	width: 343,
	height: 53,
	backgroundColor: "rgb(242, 242, 247)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 20,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0,0,0,0.08)",
	shadowRadius: 0,
	},
_Group_3: {
	width: 250,
	height: 21,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 16,
	},
_Search_task: {
	width: 221,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 47},
		{translateY: -8.5},
	],
	color: "rgba(49, 50, 51, 0.698)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 18,
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_categories: {
	width: 343,
	height: 51,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 251,
	},
_Rectangle_4: {
	width: 343,
	height: 51,
	backgroundColor: "rgb(245, 246, 254)",
	position: "absolute",
	borderRadius: 10,
	},
_Rectangle_Copy: {
	width: 146,
	height: 38,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 12},
		{translateY: 6},
	],
	borderRadius: 10,
	},
_All_task: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 68},
		{translateY: -8.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_In_Progress: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 218},
		{translateY: -7.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_bottom_bar: {
	width: 375,
	height: 94,
	position: "absolute",
	left: 0,
	top: 718,
	},
_Bottom_bar: {
	width: 375,
	height: 94,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_Copy_16: {
	width: 375,
	height: 94,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(49, 50, 51)",
	},
_Group_11: {
	width: 344,
	height: 53,
	position: "absolute",
	left: 16,
	top: 15,
	},
_Group_7: {
	width: 36,
	height: 45,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 7,
	},
_Shape: {
	width: 26,
	height: 26,
	position: "absolute",
	transform: [
		{translateX: 5},
	],
	},
_Home: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 2},
		{translateY: 7.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 11,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_4: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 143,
	top: 0,
	},
_Group_5: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_10: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Oval: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_34d9ae: {
	width: 20.37,
	height: 20.37,
	position: "absolute",
	left: 15.315,
	top: 15.565,
	},
_layer_8b9681: {
	},
_Group_6: {
	width: 37,
	height: 47,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 307,
	top: 6,
	},
___3: {
	width: 18.704,
	height: 18.704,
	position: "absolute",
	transform: [
		{translateX: 9.648},
		{translateY: 8.84799},
	],
	},
_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 10.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 7.8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_9: {
	width: 44,
	height: 47,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 228,
	top: 6,
	},
___4: {
	width: 21,
	height: 21,
	position: "absolute",
	transform: [
		{translateX: 11.5},
		{translateY: 4.70001},
	],
	},
_Activity: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 11},
		{translateY: 9.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 9,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_8: {
	width: 45,
	height: 50,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 71,
	top: 3,
	},
___5: {
	width: 28.333,
	height: 19.8979,
	position: "absolute",
	transform: [
		{translateX: 6.94162},
		{translateY: 8.15744},
	],
	},
_Folder: {
	width: 43,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 11},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 9,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_medical_app_web_design: {
	width: 344,
	height: 183,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 521,
	},
_Rectangle_5: {
	width: 344,
	height: 183,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(252.512,252.512,252.512,0.5)",
	shadowRadius: 4,
	},
_Medial_Web_Design: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -75.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.342857,
	textAlign: "left",
	},
_Website_that_the_cus: {
	width: 312,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -44.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Group_14: {
	width: 312,
	height: 8,
	position: "absolute",
	left: 16,
	top: 116,
	},
_Rectangle_6: {
	width: 312,
	height: 8,
	backgroundColor: "rgb(104, 206, 140)",
	position: "absolute",
	borderRadius: 5.5,
	},
_Done__100__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: 1.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Rectangle_7: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 132},
	],
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Group_15: {
	width: 80,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 248},
		{translateY: 15},
	],
	},
_Rectangle_8: {
	width: 80,
	height: 22,
	backgroundColor: "rgb(104, 206, 140)",
	position: "absolute",
	borderRadius: 4,
	},
_Complete: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 22},
		{translateY: -6},
	],
	color: "rgb(30, 169, 79)",
	fontSize: 10,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Group_18: {
	width: 80,
	height: 26,
	position: "absolute",
	left: 16,
	top: 141,
	},
_Rectangle_9: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_3: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_4: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_2: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73334},
	],
	},
_Rectangle_10: {
	width: "100%",
	height: "100%",
	},
_Rectangle_11: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 18,
	top: 0,
	},
_Mask_5: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_6: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_3: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866669},
	],
	},
_Rectangle_12: {
	width: "100%",
	height: "100%",
	},
_Rectangle_13: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 36,
	top: 0,
	},
_Mask_7: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_8: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_4: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73334},
	],
	},
_Rectangle_14: {
	width: "100%",
	height: "100%",
	},
_Group_17: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 54,
	top: 0,
	},
_Rectangle_15: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_9: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_10: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_11: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_16: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	},
_Rectangle_container_5: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866669},
	],
	},
_Rectangle_17: {
	width: "100%",
	height: "100%",
	},
_Group_16: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Rectangle_Copy_5: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_12: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_13: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_14: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_18: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	},
_Rectangle_19: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(49, 50, 51)",
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866669},
	],
	},
_3_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7},
		{translateY: -5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19: {
	width: 109,
	height: 14,
	position: "absolute",
	left: 219,
	top: 147,
	},
___6: {
	width: 9.35201,
	height: 9.35199,
	position: "absolute",
	transform: [
		{translateX: 2.32401},
		{translateY: 2.42401},
	],
	},
_Create_by_Maria_Lim: {
	width: 91,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 1},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 9,
	fontWeight: "600",
	lineHeight: 10.5469,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_loupe_1_container: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 39,
	top: 193,
	},
_loupe_1: {
	width: "100%",
	height: "100%",
	},
_grocery_mobile_app: {
	width: 344,
	height: 183,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 322,
	},
_Rectangle_20: {
	width: 344,
	height: 183,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(252.512,252.512,252.512,0.5)",
	shadowRadius: 4,
	},
_Grocery_Mobile_App: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -75.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.342857,
	textAlign: "left",
	},
_Mobile_App_that_the: {
	width: 312,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: -44.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Group_14_2: {
	width: 312,
	height: 8,
	position: "absolute",
	left: 16,
	top: 116,
	},
_Rectangle_21: {
	width: 312,
	height: 8,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 5.5,
	},
_Rectangle_Copy_4: {
	width: 215,
	height: 8,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	},
_In_Progress__40__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 16},
		{translateY: 1.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 10,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Rectangle_22: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 132},
	],
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Group_15_2: {
	width: 80,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 248},
		{translateY: 15},
	],
	},
_Rectangle_23: {
	width: 80,
	height: 22,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	borderRadius: 4,
	},
_4_days_left: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 22},
		{translateY: -6},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 10,
	fontWeight: "600",
	fontFamily: "Montserrat",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Group_18_2: {
	width: 80,
	height: 26,
	position: "absolute",
	left: 16,
	top: 141,
	},
_Rectangle_24: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_15: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_16: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_6: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73333},
	],
	},
_Rectangle_25: {
	width: "100%",
	height: "100%",
	},
_Rectangle_26: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 18,
	top: 0,
	},
_Mask_17: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_18: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_7: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866669},
	],
	},
_Rectangle_27: {
	width: "100%",
	height: "100%",
	},
_Rectangle_28: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 36,
	top: 0,
	},
_Mask_19: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_20: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_8: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -1.73333},
	],
	},
_Rectangle_29: {
	width: "100%",
	height: "100%",
	},
_Group_17_2: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 54,
	top: 0,
	},
_Rectangle_30: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_21: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_22: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_23: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_31: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	},
_Rectangle_container_9: {
	width: 30.3333,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866669},
	],
	},
_Rectangle_32: {
	width: "100%",
	height: "100%",
	},
_Group_16_2: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Rectangle_Copy_5_2: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_24: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_25: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_26: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_33: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	},
_Rectangle_34: {
	width: 30.3333,
	height: 30.3333,
	backgroundColor: "rgb(49, 50, 51)",
	position: "absolute",
	transform: [
		{translateX: -2.60001},
		{translateY: -0.866669},
	],
	},
_3__2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7},
		{translateY: -5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19_2: {
	width: 109,
	height: 14,
	position: "absolute",
	left: 219,
	top: 147,
	},
___7: {
	width: 9.35201,
	height: 9.352,
	position: "absolute",
	transform: [
		{translateX: 2.32401},
		{translateY: 2.424},
	],
	},
_Create_by_Maria_Lim_2: {
	width: 91,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 1},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 9,
	fontWeight: "600",
	lineHeight: 10.5469,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
})

