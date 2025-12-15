import React from "react";

const InfoBox = ({ title, children }) => (
  <div className="info-box">
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
);

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Santa Claus ——— 2025</p>
        <h1>サンタさんへのおねがいフォーム</h1>
        <p className="subtitle">
          今年がんばったあなたに、サンタさんへおねがいごとをおくりましょう！
        </p>
      </header>

      <main className="content">
        <section className="form-card">
          <div className="form-header">
            <div>
              <p className="eyebrow">FORM for Japanese Kids</p>
              <h2>おねがいごとをかいてね</h2>
            </div>
          </div>

          <form
            name="santa-wish"
            method="POST"
            data-netlify="true"
            action="/success.html"
          >
            <input type="hidden" name="form-name" value="santa-wish" />
            <p className="sr-only">
              <label>
                シークレットフィールド：
                <input name="secret-field" />
              </label>
            </p>

            <label className="field">
              <span className="label">欲しいプレゼント</span>
              <p className="note">
                サンタクロースはなんでもあげれる訳ではありません。
                <br />
                プレゼントはお父さん・お母さんと相談して、お二人が「いいよ」と言ったものを入力してください。
              </p>
              <input
                type="text"
                name="欲しいプレゼント"
                required
                placeholder="例：漢字テスト特訓セット"
                aria-describedby="gift-note"
              />
            </label>

            <label className="field">
              <span className="label">今年がんばったこと</span>
              <textarea
                name="今年がんばったこと"
                rows="3"
                required
                placeholder="がんばったことをおしえてね"
              />
            </label>

            <label className="field">
              <span className="label">今年一番うれしかったこと</span>
              <textarea
                name="今年一番うれしかったこと"
                rows="3"
                required
                placeholder="わくわくしたできごとをおしえてね"
              />
            </label>

            <button type="submit">サンタさんへおくる</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
