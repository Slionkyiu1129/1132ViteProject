function App() {
  return (
    <div>
      <div className="body">
        <div className="logo">
          <img src="images/頭貼.png" alt="Happy" />
        </div>
        <div className="logo-content">
          <h2 className="title1">Moody Baby 你的情緒紀錄</h2>
        </div>
        <div className="article">
          <h2 className="article-content1">這個月，你過得很快樂！</h2>
          <h3 className="article-content2">下滑看更多</h3>
          <img src="images/downArrow.png" alt="downArrow" width="33" />
          <img src="images/January (2).png" alt="Monthly" width="403" />
          <h2 className="article-content1">你的情緒百分比👇</h2>
          <img src="images/January (3).png" alt="Monthly" width="403" />
          <img className="img-downArrow" src="images/downArrow.png" alt="downArrow" width="33" />
          <h2 className="article-content3">給情緒一點空間 讓自己更有力量</h2>
        </div>
        <div className="logo-content">
            <p className="footer">Design by Moody Baby</p>
        </div>
      </div>
    </div>
  );
}

export default App