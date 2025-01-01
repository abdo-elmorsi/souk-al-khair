import React from 'react'
import { Text, View } from 'react-native'

function About() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text
				style={{ fontSize: 30, fontWeight: 'bold' }}
			>About</Text>
		</View>
	)
}

export default About