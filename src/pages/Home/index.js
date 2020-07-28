import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'


function Home() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Dicas para se tornar um excelente jogador e subir patentes no CS GO!"}>
      </BannerMain>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}>                       
      </Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}>                       
      </Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}>                       
      </Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}>                       
      </Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}>                       
      </Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}>                       
      </Carousel>
      <Footer />
    </div>
  );
}
export default Home;
