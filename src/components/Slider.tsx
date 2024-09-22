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
        <div className="swiper-button-prev" style={styles.buttonSlide}></div>
        <div className="swiper-button-next" style={styles.buttonSlide}></div>

        {getContent()}
      </Swiper>
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
  },
  swiper: {
    width: '100%',
    height: 'auto',
  },
  slide: {
    width: '200px',
    height: '100px',
    // background: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    textAlign: 'left',
  },
  title: {
    color: 'blue',
    margin: 0,
  },
  text: {
    margin: 0,
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