<script>
  const annotation =
    "サンタクロースはなんでもあげれる訳ではありません。プレゼントはお父さん・お母さんと相談して、お二人が「いいよ」と言ったものを入力してください。";
</script>

<main>
  <section class="hero">
    <h1>サンタさんへのおねがいフォーム</h1>
    <p>がんばったこと、うれしかったことを教えてね。iPadでも見やすい大きめの文字だよ。</p>
  </section>

  <section class="card">
    <form name="santa-request" method="POST" data-netlify="true" action="/success" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="santa-request" />
      <p class="honeypot">
        <label>
          ロボットチェック
          <input name="bot-field" />
        </label>
      </p>

      <label>
        欲しいプレゼント
        <span class="note">{annotation}</span>
        <input
          type="text"
          name="present"
          aria-describedby="present-note"
          placeholder="例：やさしい絵本、ぬいぐるみなど"
          required
        />
      </label>

      <label>
        今年がんばったこと
        <textarea
          name="effort"
          placeholder="学校やおうちでがんばったことを教えてね"
          required
        ></textarea>
      </label>

      <label>
        今年一番うれしかったこと
        <textarea
          name="happy"
          placeholder="とても楽しかったできごとを書いてね"
          required
        ></textarea>
      </label>

      <button type="submit">サンタさんにおくる</button>
    </form>

    <p class="footer-note">送信ボタンを押すと、サンタクロースへメッセージが届きます。</p>
  </section>
</main>
