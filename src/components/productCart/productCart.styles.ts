import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  productCartContainer: {
    display: 'flex',
    gap: 7,
    borderRadius: 6,
    shadowColor: 'red',
    backgroundColor: 'white',
  },

  titleContainer: {
    display: 'flex',
    paddingHorizontal: 10,
    gap: 2,
  },
  title: {
    fontSize: 17,
    width: '100%',
    overflow: 'hidden',
    fontWeight: '800',
    color: '#333',
  },
  nameBold: {
    fontWeight: '300',
  },
  priceContainer: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceCont: {
    display: 'flex',
    gap: 3,
  },
});
