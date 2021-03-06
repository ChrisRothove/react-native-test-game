import React, { useCallback } from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { useFocusEffect } from '@react-navigation/native'
import TouchableWrapper from '../../components/global/layout/TouchableWrapper'
import DefaultPage from '../../components/global/layout/DefaultPage'
import builtLogo from '../../../assets/built-logo.png'

const SceneSplash = ({ navigation }) => {
    useFocusEffect(
        useCallback(() => {
            const delayedNavigation = setTimeout(() => {
                navigation.navigate('Login')
            }, 2000)
            return () => clearTimeout(delayedNavigation)
        }, [])
    )
    return (
        <TouchableWrapper handlePress={() => navigation.navigate('Login')}>
            <DefaultPage>
                <Image style={{ width: 235, height: 180 }} source={builtLogo} />
                <View>
                    <Text style={{ fontSize: 23, marginTop: 80 }}>by Wayfarer Games</Text>
                </View>
            </DefaultPage>
        </TouchableWrapper>
    )
}

SceneSplash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSplash
