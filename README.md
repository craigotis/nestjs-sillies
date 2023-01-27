```
npm i
npm run test:e2e
```
You'll see:
```
  console.log
    Config: {
      nestChosen: 'pizza',
      pastaService: 'pizza',
      pastaConfig: 'pizza',
      pizzaService: 'pizza',
      pizzaConfig: 'pizza'
    }
```
And if you re-order the `AppModule` imports, you'll see:
```
  console.log
    Config: {
      nestChosen: 'pasta',
      pastaService: 'pasta',
      pastaConfig: 'pasta',
      pizzaService: 'pasta',
      pizzaConfig: 'pasta'
    }
```
