import React from 'react'
import "./Manga.css"

const Manga = () => {
  return (
    <div className='container'>
      <div className="sub-container">
        <div className="manga-sec">
            <h1>Manga</h1>
            <img src="./Assets/zoro-manga.jpg" alt="" />
            <p>Written and illustrated by Eiichiro Oda, One Piece has been serialized by Shueisha in the shōnen manga anthology Weekly Shōnen Jump since July 22, 1997.[29][30] Shueisha has collected its chapters into individual tankōbon volumes. The first volume was released on December 24, 1997.[31] By November 1, 2024, a total of 110 volumes have been released.[32]</p>
            <br />
            <img src="./Assets/sanji.jpg" alt="" />
            <p className='manga-last'>Oda teamed up with Akira Toriyama to create a single crossover of One Piece and Toriyama's Dragon Ball. Entitled Cross Epoch, the one-shot was published in the December 25, 2006, issue of Weekly Shōnen Jump and the April 2011 issue of the English Shonen Jump.[44] Oda collaborated with Mitsutoshi Shimabukuro, author of Toriko, for a crossover one-shot of their series titled Taste of the Devil Fruit (実食! 悪魔の実!!, Jitsushoku! Akuma no Mi!!, lit. 'The True Food! Devil Fruit!!'),[45] published in Weekly Shōnen Jump on April 4, 2011. The spin-off series One Piece Party (ワンピースパーティー, Wan Pīsu Pātī), written by Ei Andō in a super deformed art style, began serialization in Saikyō Jump on December 5, 2011.[46] Its final chapter was published on Shōnen Jump+ on February 2, 2021.[47]/home/raja-singh/Downloads/sanji.jpg</p>
            <img src="./Assets/joyboy.jpg" alt="" />
            <p className='manga-last'> The first English translation of One Piece was released by Viz Media in November 2002, who published its chapters in the manga anthology Shonen Jump, and later collected in volumes since June 30, 2003.[33][34][35] In 2009, Viz announced the release of five volumes per month during the first half of 2010 to catch up with the serialization in Japan.[36] Following the discontinuation of the print Shonen Jump, Viz began releasing One Piece chapterwise in its digital successor Weekly Shonen Jump on January 30, 2012.[37] Following the digital Weekly Shonen Jump's cancelation in December 2018, Viz Media started simultaneously publishing One Piece through its Shonen Jump service, and by Shueisha through Manga Plus, in January 2019.[38][39]</p>
        </div>
      </div>
    </div>
  )
}

export default Manga
