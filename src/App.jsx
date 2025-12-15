import React from "react";

const Hero = ({ eyebrow, title, subtitle }) => (
  <header className="hero">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    {subtitle && <p className="subtitle">{subtitle}</p>}
  </header>
);

const HomePage = () => (
  <div className="page">
    <Hero
      eyebrow="Santa Claus ——— 2025"
      title="サンタさんへのおねがいフォーム"
      subtitle="今年がんばったあなたに、サンタさんへおねがいごとをおくりましょう！"
    />

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
          data-netlify-honeypot="secret-field"
          action="/success"
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
              name="gift"
              required
              placeholder="例：漢字テスト特訓セット"
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
    </main>
  </div>
);

const SuccessPage = () => (
  <div className="page">
    <Hero
      eyebrow="Santa Claus ——— 2025"
      title="おねがいをうけとったよ！"
      subtitle="サンタさんがあなたの願いをチェックしています。"
    />

    <main className="content">
      <section className="form-card success-card">
        <div className="success-message">
          <p className="eyebrow">Thank you!</p>
          <h2>サンタさんにおねがいがとどいたよ</h2>
          <p>
            すてきなおねがいをおくってくれてありがとう。
            <br />
            クリスマスまでいい子で過ごしてね！
          </p>
        </div>
        <div className="success-actions">
          <a className="link-button" href="/">
            フォームにもどる
          </a>
        </div>
      </section>
    </main>
  </div>
);

function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const normalizedPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const isSuccessPage = normalizedPath === "/success";

  return isSuccessPage ? <SuccessPage /> : <HomePage />;
}

export default App;
