import React from 'react';

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
        <p className="eyebrow">Santa Form</p>
        <h1>サンタさんへのおねがいフォーム</h1>
        <p className="subtitle">
          ことしがんばったあなたに、サンタさんへおねがいごとをおくりましょう！
        </p>
      </header>

      <main className="content">
        <section className="form-card">
          <div className="form-header">
            <div>
              <p className="eyebrow">Netlify Form</p>
              <h2>おねがいごとをかいてね</h2>
            </div>
            <span className="badge">iPad にやさしいフォーム</span>
          </div>

          <form
            name="santa-wish"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="secret-field"
            action="/success/"
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
                サンタクロースはなんでもあげれる訳ではありません。プレゼントはお父さん・お母さんと相談して、お二人が「いいよ」と言ったものを入力してください。
              </p>
              <input
                type="text"
                name="gift"
                required
                placeholder="例：あたらしいえんぴつセット"
                aria-describedby="gift-note"
              />
            </label>

            <label className="field">
              <span className="label">今年がんばったこと</span>
              <textarea
                name="effort"
                rows="3"
                required
                placeholder="がんばったことをおしえてね"
              />
            </label>

            <label className="field">
              <span className="label">今年一番うれしかったこと</span>
              <textarea
                name="happy"
                rows="3"
                required
                placeholder="わくわくしたできごとをおしえてね"
              />
            </label>

            <button type="submit">サンタさんへおくる</button>
          </form>
        </section>

        <section className="side-panel">
          <InfoBox title="おねがいのポイント">
            すなおなことばで、しっかりかきましょう。プレゼントはひとつだけ、だれかといっしょに考えてね。
          </InfoBox>
          <InfoBox title="送信後について">
            送信すると「Thank you!!!」のページがひらきます。クリスマスまでの時間もたのしんでね。
          </InfoBox>
        </section>
      </main>
    </div>
  );
}

export default App;
