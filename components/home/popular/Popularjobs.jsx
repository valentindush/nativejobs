import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'

import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {

  const router = useRouter()
  const loading = false
  const error = false
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => (
            <PopularJobCard 
              item={item}
            />
          )}

          keyExtractor={item => item?.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
          showsVerticalScrollIndicator={false}
        >

        </FlatList>}
      </View>
    </View>
  )
}

export default Popularjobs