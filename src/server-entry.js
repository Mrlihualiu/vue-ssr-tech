import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        reject(new Error('no componet mathed'))
      }
      resolve(app)
    })
  })
}

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(HOST, PORT, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})