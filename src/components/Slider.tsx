import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './slider.css';

export const Slider = ({ data }) => {

  const getContent = () => {
    return data.map((i, ind) => (<SwiperSlide key={ind} style={styles.slide}>
      <h2 style={styles.title}>{i.head}</h2>
      <p style={styles.text}>{i.text}</p>
    </SwiperSlide>))
  }

  if (data.length === 0) return null;

  return (
    <div style={styles.container}>
      <div className="swiper-button-prev" style={styles.buttonSlide}></div>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        style={styles.swiper}
        modules={[Navigation]}
      >
        {/* Добавляем кнопки переключения */}

        {getContent()}
      </Swiper>
      <div className="swiper-button-next" style={styles.buttonSlide}></div>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: '70px',
    paddingRight: '70px',
    boxSizing: 'border-box',
    position: "relative"
  },
  swiper: {
    width: '100%',
    height: 'auto',
  },
  slide: {
    width: '200px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    textAlign: 'left',
  },
  title: {
    color: '#3877EE',
    margin: 0,
    textAlign: 'left',
    width: "100%",
    fontSize: "25px"
  },
  text: {
    margin: 0,
    textAlign: 'left',
    width: "100%"
  },
  buttonSlide: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid transpirent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    background: '#ffffff',
  },
};