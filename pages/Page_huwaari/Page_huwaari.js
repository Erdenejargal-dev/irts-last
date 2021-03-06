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
import {image_Rectangle_6_link} from './assets/imageLinks.js'
import {image_Rectangle_8_link} from './assets/imageLinks.js'
import {image_Rectangle_10_link} from './assets/imageLinks.js'
import {image_Rectangle_12_link} from './assets/imageLinks.js'
import {image_Rectangle_14_link} from './assets/imageLinks.js'
const Page_huwaari  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._calendar}    >
				<View style = {noneModeStyles._layer_38f2a3}    >
					<View style = {noneModeStyles._layer_a1f92b}   >
						<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
							<Path fill = {"#313233"}     d = "M8.49999 17L10.0015 15.4985L4.07185 9.54341H17V7.45658H4.07185L10.0015 1.5015L8.49999 0L0 8.49999L8.49999 17Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.__}    >
				</View>
				<Text style = {noneModeStyles._Calendar}   >
					ХУВААРЬ
				</Text>
			</View>
			<View style = {noneModeStyles._Date}    >
				<Text style = {noneModeStyles._Today}   >
					ӨНӨӨДӨР
				</Text>
				<View style = {noneModeStyles._Group}    >
					<Text style = {noneModeStyles._MON}   >
						ДАВ
					</Text>
					<Text style = {noneModeStyles._06}   >
						06
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_2}    >
					<Text style = {noneModeStyles._TUE}   >
						МЯГ
					</Text>
					<Text style = {noneModeStyles._07}   >
						07
					</Text>
				</View>
				<Text style = {noneModeStyles._WED}   >
					ЛХА
				</Text>
				<Text style = {noneModeStyles._08}   >
					08
				</Text>
				<View style = {noneModeStyles._Group_Copy_4}    >
					<Text style = {noneModeStyles._THU}   >
						ПҮР
					</Text>
					<Text style = {noneModeStyles._09}   >
						09
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_5}    >
					<Text style = {noneModeStyles._FRI}   >
						БА
					</Text>
					<Text style = {noneModeStyles._10}   >
						10
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_6}    >
					<Text style = {noneModeStyles._SAT}   >
						ХАГ
					</Text>
					<Text style = {noneModeStyles._11}   >
						11
					</Text>
				</View>
				<View style = {noneModeStyles._Group_Copy_7}    >
					<Text style = {noneModeStyles._SUN}   >
						БҮТ
					</Text>
					<Text style = {noneModeStyles._12}   >
						12
					</Text>
				</View>
				<View style = {noneModeStyles._Oval}    >
				</View>
			</View>
			<View style = {noneModeStyles._details_meeting}    >
				<View style = {noneModeStyles._Rectangle}    >
				</View>
				<View style = {noneModeStyles.___2}    >
				</View>
				<View style = {noneModeStyles._Group_20_Copy}    >
					<View style = {noneModeStyles._Rectangle_2}    >
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App}   >
						Математик
					</Text>
					<Text style = {noneModeStyles._Mobile_App_that_the}   >
						Тригонометрийн урвуу функц, тригонометр тэгшитгэлийн шийд 
					</Text>
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
					<View style = {noneModeStyles._Group_15}    >
						<View style = {noneModeStyles._Rectangle_4}    >
						</View>
						<Text style = {noneModeStyles._10_00}   >
							ИРЦ БҮРТГЭХ 
						</Text>
					</View>
					<View style = {noneModeStyles._Group_18}    >
						<View style = {noneModeStyles._Rectangle_5}    >
							<View style = {noneModeStyles._Mask}    >
							</View>
							<View style = {noneModeStyles._Mask_2}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container}    >
								<View style = {noneModeStyles._Rectangle_6}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_6_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Rectangle_7}    >
							<View style = {noneModeStyles._Mask_3}    >
							</View>
							<View style = {noneModeStyles._Mask_4}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container_2}    >
								<View style = {noneModeStyles._Rectangle_8}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_8_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Rectangle_9}    >
							<View style = {noneModeStyles._Mask_5}    >
							</View>
							<View style = {noneModeStyles._Mask_6}    >
							</View>
							<View style = {noneModeStyles._Rectangle_container_3}    >
								<View style = {noneModeStyles._Rectangle_10}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_10_link}}/>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_17}    >
							<View style = {noneModeStyles._Rectangle_11}    >
								<View style = {noneModeStyles._Mask_7}    >
									<View style = {noneModeStyles._Mask_8}    >
									</View>
									<View style = {noneModeStyles._Mask_9}    >
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_container_4}    >
									<View style = {noneModeStyles._Rectangle_12}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_12_link}}/>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_16}    >
								<View style = {noneModeStyles._Rectangle_Copy_5}    >
									<View style = {noneModeStyles._Mask_10}    >
										<View style = {noneModeStyles._Mask_11}    >
										</View>
										<View style = {noneModeStyles._Mask_12}    >
										</View>
										<View style = {noneModeStyles._Rectangle_13}    >
										</View>
									</View>
									<View style = {noneModeStyles._Rectangle_container_5}    >
										<View style = {noneModeStyles._Rectangle_14}   >
											<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_14_link}}/>
										</View>
									</View>
								</View>
								<Text style = {noneModeStyles._3_}   >
									3+
								</Text>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_19}    >
						<View style = {noneModeStyles.___3}    >
						</View>
						<Text style = {noneModeStyles._Create_by_Maria_Lim}   >
							БАГШ : ОЧИРОО
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_15}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_2}    >
				</View>
				<View style = {noneModeStyles._Group_2}    >
					<View style = {noneModeStyles._Rectangle_16}    >
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App_Copy}   >
						Газар зүй
					</Text>
					<View style = {noneModeStyles._Group_15_Copy}    >
						<View style = {noneModeStyles._Rectangle_17}    >
						</View>
						<Text style = {noneModeStyles._10_00_2}   >
							ИРЦ БҮРТГЭХ 
						</Text>
					</View>
					<Text style = {noneModeStyles._Mobile_App_that_the_Copy}   >
						Газар зүйн мэдээллийн систем ашиглах нь 
					</Text>
					<View style = {noneModeStyles._Group_19_Copy}    >
						<View style = {noneModeStyles.___4}    >
						</View>
						<Text style = {noneModeStyles._Create_by_Maria_Lim_2}   >
							БАГШ : ЗОРИГ
						</Text>
					</View>
					<View style = {noneModeStyles.___5}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_2_Copy}    >
					<View style = {noneModeStyles._Rectangle_18}    >
					</View>
					<Text style = {noneModeStyles._Grocery_Mobile_App_Copy_2}   >
						Үндэсний бичиг
					</Text>
					<View style = {noneModeStyles._Group_15_Copy_2}    >
						<View style = {noneModeStyles._Rectangle_19}    >
						</View>
						<Text style = {noneModeStyles._10_00_3}   >
							ИРЦ БҮРТГЭХ 
						</Text>
					</View>
					<Text style = {noneModeStyles._Mobile_App_that_the_Copy_2}   >
						Идэвхтэй хэрэглээ бүхий үгийн үндэс залгаврыг зөв бичих 
					</Text>
					<View style = {noneModeStyles._Group_19_Copy_2}    >
						<View style = {noneModeStyles.___6}    >
						</View>
						<Text style = {noneModeStyles._Create_by_Maria_Lim_3}   >
							БАГШ : АМАР
						</Text>
					</View>
					<View style = {noneModeStyles.___7}    >
					</View>
				</View>
				<View style = {noneModeStyles._Oval_2}    >
				</View>
				<View style = {noneModeStyles._Oval_Copy}    >
				</View>
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
								<View style = {noneModeStyles._Oval_3}    >
								</View>
								<View style = {noneModeStyles._layer_9b40d4}    >
									<View style = {noneModeStyles._layer_4b1132}   >
										<Svg style={{height: 21, width: 21}} viewBox = "0 0 21 21">
											<Path fill = {"white"}     d = "M11.9794 21V11.9794H21V9.02062H11.9794V0H9.02062V9.02062H0V11.9794H9.02062V21H11.9794Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_6}    >
						<View style = {noneModeStyles.___8}    >
						</View>
						<Text style = {noneModeStyles._Profile}   >
							БҮРТГЭЛ
						</Text>
					</View>
					<View style = {noneModeStyles._Group_9}    >
						<View style = {noneModeStyles.___9}    >
						</View>
						<Text style = {noneModeStyles._Activity}   >
							ИРЦ
						</Text>
					</View>
					<View style = {noneModeStyles._Group_8}    >
						<View style = {noneModeStyles.___10}    >
						</View>
						<Text style = {noneModeStyles._Folder}   >
							ИДЭВХИ
						</Text>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_huwaari

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_calendar: {
	width: 339.016,
	height: 25,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 19.984,
	top: 64,
	},
_layer_38f2a3: {
	position: "absolute",
	transform: [
		{translateY: 3.58401},
	],
	},
_layer_a1f92b: {
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
_Calendar: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 130.016},
		{translateY: -10.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Date: {
	width: 340,
	height: 119,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 111,
	},
_Today: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 1},
		{translateY: -32.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group: {
	width: 33,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 65},
	],
	},
_MON: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5},
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_06: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_2: {
	width: 33,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 58},
		{translateY: 65},
	],
	},
_TUE: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_07: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 4},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_WED: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 109},
		{translateY: 5.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_08: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 115},
		{translateY: 29.5},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_4: {
	width: 27,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 65},
	],
	},
_THU: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 2},
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_09: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_5: {
	width: 20,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 216},
		{translateY: 65},
	],
	},
_FRI: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 3},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_6: {
	width: 26,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 261},
		{translateY: 65},
	],
	},
_SAT: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_Copy_7: {
	width: 28,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 312},
		{translateY: 65},
	],
	},
_SUN: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -22},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: 2},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 0,
	textAlign: "left",
	},
_Oval: {
	width: 6,
	height: 6,
	position: "absolute",
	transform: [
		{translateX: 121},
		{translateY: 113},
	],
	},
_details_meeting: {
	width: 375,
	height: 489,
	position: "absolute",
	left: 0,
	top: 250,
	},
_Rectangle: {
	width: 375,
	height: 468,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
___2: {
	width: 19.968,
	height: 19.968,
	backgroundColor: "rgb(205, 68, 68)",
	position: "absolute",
	left: 18.016,
	top: 27.616,
	},
_Group_20_Copy: {
	width: 311,
	height: 145,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 16,
	},
_Rectangle_2: {
	width: 311,
	height: 145,
	backgroundColor: "rgb(92, 104, 255)",
	position: "absolute",
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(212.161,210.079,210.079,0.5)",
	shadowRadius: 4,
	},
_Grocery_Mobile_App: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -56.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Mobile_App_that_the: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -23.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Rectangle_3: {
	width: 311,
	height: 1,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateY: 87},
	],
	borderTopWidth: 0.5,
	borderRightWidth: 0.5,
	borderBottomWidth: 0.5,
	borderLeftWidth: 0.5,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Group_15: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 224},
		{translateY: 15},
	],
	},
_Rectangle_4: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00: {
	width: 55,
	height: 10,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 10},
		{translateY: -5},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Group_18: {
	width: 80,
	height: 26,
	position: "absolute",
	left: 15,
	top: 100,
	},
_Rectangle_5: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_2: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container: {
	width: 30.3334,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.59998},
		{translateY: -1.73333},
	],
	},
_Rectangle_6: {
	width: "100%",
	height: "100%",
	},
_Rectangle_7: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 18,
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
	width: 30.3334,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.59998},
		{translateY: -0.866667},
	],
	},
_Rectangle_8: {
	width: "100%",
	height: "100%",
	},
_Rectangle_9: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 36,
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
	width: 30.3334,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.59998},
		{translateY: -1.73333},
	],
	},
_Rectangle_10: {
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
_Rectangle_11: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_7: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_8: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_9: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_container_4: {
	width: 30.3334,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.59998},
		{translateY: -0.866667},
	],
	},
_Rectangle_12: {
	width: "100%",
	height: "100%",
	borderRadius: 25,
	},
_Group_16: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	borderRadius: 25,
	},
_Rectangle_Copy_5: {
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
	left: 0,
	top: 0,
	},
_Mask_11: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Mask_12: {
	width: 26,
	height: 26,
	position: "absolute",
	},
_Rectangle_13: {
	width: 30.3334,
	height: 30.3333,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	transform: [
		{translateX: 39.8667},
		{translateY: -12.1333},
	],
	},
_Rectangle_container_5: {
	width: 30.3334,
	height: 30.3333,
	position: "absolute",
	transform: [
		{translateX: -2.59998},
		{translateY: -0.866667},
	],
	},
_Rectangle_14: {
	width: "100%",
	height: "100%",
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
	width: 94.676,
	height: 13,
	position: "absolute",
	left: 200.324,
	top: 110,
	},
___3: {
	width: 9.35205,
	height: 9.352,
	position: "absolute",
	transform: [
		{translateY: 0.424},
	],
	},
_Create_by_Maria_Lim: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 12.8595},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 9,
	fontWeight: "600",
	lineHeight: 10.5469,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_15: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 58,
	borderRadius: 2.5,
	},
_Rectangle_Copy: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 213,
	borderRadius: 2.5,
	},
_Rectangle_Copy_2: {
	width: 4,
	height: 121,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 25,
	top: 368,
	borderRadius: 2.5,
	},
_Group_2: {
	width: 311,
	height: 126,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 177,
	},
_Rectangle_16: {
	width: 311,
	height: 126,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 16,
	},
_Grocery_Mobile_App_Copy: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -47},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Group_15_Copy: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 224},
		{translateY: 15},
	],
	},
_Rectangle_17: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00_2: {
	width: 55,
	height: 10,
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 6},
	],
	color: "rgb(68, 179, 241)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Mobile_App_that_the_Copy: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -14},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19_Copy: {
	width: 95.676,
	height: 13,
	position: "absolute",
	left: 17.324,
	top: 94,
	},
___4: {
	width: 9.35205,
	height: 9.35201,
	position: "absolute",
	transform: [
		{translateY: 0.423996},
	],
	},
_Create_by_Maria_Lim_2: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 13.8595},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 10,
	fontWeight: "600",
	lineHeight: 11.7188,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___5: {
	width: 16.032,
	height: 4.032,
	position: "absolute",
	transform: [
		{translateX: 275.984},
		{translateY: 96.584},
	],
	},
_Group_2_Copy: {
	width: 311,
	height: 126,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 48,
	top: 319,
	},
_Rectangle_18: {
	width: 311,
	height: 126,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	borderRadius: 16,
	},
_Grocery_Mobile_App_Copy_2: {
	width: 138,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -47},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: -0.3,
	textAlign: "left",
	},
_Group_15_Copy_2: {
	width: 72,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 224},
		{translateY: 15},
	],
	},
_Rectangle_19: {
	width: 72,
	height: 22,
	backgroundColor: "rgb(60, 135, 251)",
	position: "absolute",
	borderRadius: 4,
	},
_10_00_3: {
	width: 55,
	height: 10,
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 7},
	],
	color: "rgb(68, 179, 241)",
	fontSize: 7.5,
	fontWeight: "600",
	lineHeight: 8.78906,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "left",
	},
_Mobile_App_that_the_Copy_2: {
	width: 282,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 15},
		{translateY: -14},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 8,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: -0.171429,
	textAlign: "left",
	},
_Group_19_Copy_2: {
	width: 95.676,
	height: 13,
	position: "absolute",
	left: 17.324,
	top: 94,
	},
___6: {
	width: 9.35205,
	height: 9.35199,
	position: "absolute",
	transform: [
		{translateY: 0.424011},
	],
	},
_Create_by_Maria_Lim_3: {
	width: 81.8165,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 13.8595},
	],
	color: "rgb(92, 104, 255)",
	fontSize: 10,
	fontWeight: "600",
	lineHeight: 11.7188,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
___7: {
	width: 16.032,
	height: 4.03201,
	position: "absolute",
	transform: [
		{translateX: 275.984},
		{translateY: 96.584},
	],
	},
_Oval_2: {
	width: 18,
	height: 18,
	backgroundColor: "rgb(203, 68, 68)",
	position: "absolute",
	left: 18,
	top: 187,
	},
_Oval_Copy: {
	width: 18,
	height: 18,
	backgroundColor: "rgb(203, 68, 68)",
	position: "absolute",
	left: 18,
	top: 342,
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
	backgroundColor: "rgb(173, 130, 130)",
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
		{translateX: 5},
		{translateY: 10.5},
	],
	color: "rgb(49, 49, 49)",
	fontSize: 9,
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
_Oval_3: {
	width: 50,
	height: 50,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_9b40d4: {
	width: 20.37,
	height: 20.37,
	position: "absolute",
	left: 15.3149,
	top: 15.565,
	},
_layer_4b1132: {
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
___8: {
	width: 18.704,
	height: 18.704,
	position: "absolute",
	transform: [
		{translateX: 9.64795},
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
___9: {
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
___10: {
	width: 28.333,
	height: 19.8979,
	position: "absolute",
	transform: [
		{translateX: 6.94165},
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
})

