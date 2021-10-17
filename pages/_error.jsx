function Error({ statusCode }) {
  return (
    <div class="error">
      <title>{`${statusCode} - literaiiy.me`}</title>
      <h1>{statusCode}</h1>
      <p>{(("" + statusCode).startsWith("5")) ? "A server error has occured. Try again later." : "This page doesn't seem to exist. Try again with a different URL."}</p>
      <img class='errorImg' src="https://gist.githubusercontent.com/literaiiy/3e9da522838de94a099db49153742afe/raw/27571aa065655adf7b4dbc1e7f82cfb33840c9ba/birds.svg" alt="birds" />
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error