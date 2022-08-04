import * as React from "react"
import Svg, { Rect, Text, TSpan, Image } from "react-native-svg"

const google = (props) => (
  <Svg
    width="210mm"
    height="297mm"
    viewBox="0 0 210 297"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      style={{
        fill: "none",
        stroke: "#010100",
        strokeWidth: 0.529167,
        strokeLinecap: "round",
        strokeOpacity: 1,
        paintOrder: "stroke fill markers",
        stopColor: "#000",
      }}
      width={121.616}
      height={26.457}
      x={54.194}
      y={120.763}
      rx={1.984}
      ry={1.995}
    />
    <Text
      xmlSpace="preserve"
      style={{
        fontSize: "10.5833px",
        lineHeight: 1.25,
        fontFamily: "'Lucida Sans Unicode'",
        InkscapeFontSpecification: "'Lucida Sans Unicode'",
        strokeWidth: 0.264583,
      }}
      x={78.517}
      y={136.989}
    >
      <TSpan
        style={{
          fontSize: "10.5833px",
          strokeWidth: 0.264583,
        }}
        x={78.517}
        y={136.989}
      >
        {"Kontynuj z google"}
      </TSpan>
    </Text>
    <Image
      width={15.16}
      height={15.16}
      preserveAspectRatio="none"
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAYAAADApo5rAAAABHNCSVQICAgIfAhkiAAAIABJREFU eJztnXucXVV597/PPpe5ZnJPSABDuCfc70GwCCpUKhjLK0pFfREtpdraavG1VqrU0hcVod4v2NoL +mpprdKqCBW8IIqAXAMJARICCblnbplz3ft5/1hr773OZBIyyZyZfWbWl8+QM3PO2XuffdZvPZf1 rLVEVRWPxwNAMNEX4PFkCS8Ij8fBC8LjcfCC8HgcvCA8HgcvCI/HwQvC43HwgvB4HLwgPB4HLwiP x8ELwuNx8ILweBy8IDweBy8Ij8fBC8LjcfCC8HgcvCA8HgcvCI/HwQvC43HwgvB4HLwgPB4HLwiP x8ELwuNx8ILweBy8IDweBy8Ij8fBC8LjcfCC8HgcvCA8HgcvCI/HwQtiXNA9/PYyb9P4oXmgqnv/ fs+o8YIYD1SG/R41qMJp98PepuYHEMwxRGQ3r/aMBfmJvoApwTA9iAR7enqXvyfNXwGJXuZdnv1B /A5CzSdib0yxsQPxI+Lf1H2Q/NXTJLyFGAcCFCJFNYIwQqII1QhRAEUj0+urQCCBcY+CAIL435z5 FzDyErwwmoO3ECOQ9tWje7ahM6+UoL8Xtm5B+/uQHTtg4wbYtB4GeqFUhmoNqlWolSGKIF+AfBGK ReiZBh1dMGMWHHQQOnse0jMDZs1Fp89AuruMUEZ59Z494y3EMDT5X5rZMYEsqIJI/IwiGgARlEpQ LiEbXoRVT8Fzq+HFNfDSetjRi5QGzUGjECJ7cHEa8y7tV8zJ1MYLQR5Boa0dZsxAZs2FRYfCYUfA 4iNg8eHQ3Q0dnWg+h6gJyGXYMRUQVXs+L5qR8BZiN6S9fdyA4z/ahlSvwYsvwFOPwQO/gmdWwfPP wUCfeW1bBxQK5vWuypCR22J8bPfrEDGiEDE/kZqgOgLKO6FehWIXLDwYDj0cTj8LjjkRXXwYdHYm mSlQULEi8ULYE14Qw1BrF4zHHjdQAVG0UkJ6e+GBX8N9d8NDD0DfNpAAcnnj50sAqPX5I/v+wGnQ arXxMg1TSAWSaMn+nrxVze+hQhhCWIfOTjhiCZz1Gjj3dTB3nrEcAqJCJErgRbFbvCCGYZq/FUH8 z85BWPEo8oPvwoO/gi0bzROdXSOnhBLzMqzHj88Qi4b0H3OM+I3DRCOavs89X8P4hpOOrVbNz4zZ cMyxcOEl6KlnIrNmO+fwjIQXxDAU41ZoWIMdO5D7fgZ3/RCeeATKgyB5KORsDKBuYBEfwHGv4j8K xlq8nFVw3hgfd7gLlQjJWgoNbCOPz2PFo2JilnrNBOtHHAWv/T303AuQOfONO+fZhSksCB3Wdp0x gG1bkTu+D3d8D55+0mRz2tpJXjC8oWaZ2BhV6xCW4KDD4LUXwvK3wIID09ep7QziBAJTM96YwoIw dUGII4VtW+Gnd8Bt34S1z9o0aJ5UNrSeIKBxYC+MTLr3wIPhzW+H8y5A585HAjESsMZl6knBMKUF kViJMIRHHoJb/8EEy0Ee2tpIXA905BbSCncu0bLr2tk4o16GU86Gd16FnrYMCfLpx3W8tqnElBaE qiIrHoV//yb8+D8hF0C+3TYiJ90axcHtMEvRCiRdvm3hTjyfCCOsw+uXG4ux5BgIgri2Fpli9Z9T VxBDO+HX98IXPwnr1kBn97Bu0VYguYEGwx63Am4PPzzBlATuwNAAHHIYvPcaOP1V0NnREFtNFSah IEw4aB6mvbxxo01D100bkS99Bu64HdqLxkVqtZ6/GUQhVCtw8aXwRx9AZ89JnhJVJ7aYvCKZfIIw 9Qlx8tT+yfT8IgKPPAg3fAyeWwkdHSa3P3wAbCoimFHwUKAyBCecAtf8DRxxlO1ipkZx4eQThMXq Iv2tWkb/89vIV26CemizR8Pf0GLZo7HGHUyslmDaLPjAX8F5vwvFguNxTU4xwCQURBICuIoYGIAv fQa++00otkMOTHTpTsGx/kA0qW7H6GicgGEG9SKFq/8cvexdSD7HZLYOMAkFEVlnyWgignXrkC98 Cn52B7R3W5HYOiMR6wE4NUKT6m6MkoYaKTsCHkUmE/Xmt8MVV6Oz5kxiObT8nOpd/f7Axg6qEbJ+ PXLjdXD3HdDeZd9isyoqaflP3CdMZTE0JBWEZKpqLjDu5Z23w6aNk1oM0OKCMO06riht/EJl5ZPw wavggV9C1zR2zT96GhlWSBjfo1IJZs6Gm76OHrVk0t+6lhaEqPFnVcTU+wMQoatWwo3XwZpVZl7C ZP8Wx4KGQkQxLlO1CnPmoh//NCw5DgkCVCb3vWztGCIuSUBsyUGEbFgPH34vrFoBXZ3WRZrqwcFe IGDiqsDcr2rFzKX42KeJTjrNmUMRl69PTlp7Cqkky3eZCoV1z8MnPwarV5r5yJq+zuvhZUjSzgL1 CsydDx+/ET3xVIJknpQdz5noa20irS31ZH6BwNBO5Es3wgO/gPa4HmmCBtxctyJ+3JCtHD7HYQ/H EaewUJIh9xFeO5oLjHPTkl6X2L9VSjB9BnzsRjjxVFsOLoitCpZJXu3X0hZCRU0cUR2Cr/093PNj U5PkDsiNd38WSHrauLAugHQqKiRp36RWaoSiwXiQLJ5cFL8kyJGmx9wVn+IR5L3BHjMgdSdVzBzt uQvg2hvgxFN3czwviAxjJ3t+9//Bt/8ROron+oJSi5Q0/PhvsQjsk2ENanXQyNQQEaRzsoM8FO08 DLENXSFZYCCZBuocf1Q9txXVsJF8embA9TfDcSft1y1oZVpbEBohKx6HL98MhXYmxCLselFp7x6G UK+nDa+9A2ZMh65umDXfPC52QlvRvK9SNSUTOwdgy2YY6DdrO1VKZmIPOSiQujvxYGJiTfbSN5Q6 aR24mNl0ByxEP/gx5JgTG3QyyT2kXWhpQciWzfDJa01tUrFA0igmNIC2QujvM7HMIYvhhNNh6XHo osNg9mykuwc6u9BCway5lBTnmlX9qIdQGkL7+6C/F3lhLax4BJ56AlY/BTt6YVoP5O28buJM2miw Yw2VmlnT6W9uQo47yQ7pCCLR1FMDrZx2HRqCT/413PFdk1GK/fJRN4y9xZk7MBzBiKBWMeMehx8F Z50LJy1DDz0M6egw01GdQLbBlsXhg8ROIM6zaixBrY5WK2YxtAd/BfffCysehsFBKHRAzjnISNfn zuuIY5ZyFQ46ED56Axx/SjoxyA13phgtIwiNfWgCs/rcPT+GD10NXVYMcW6wGZ8mCZCd6WZJFiuC csmUOJz9WvQ1FxiLMG8uIjkiYezXQVKFvl549AG460fwi59AeQjaO51WnANCkgCaACS0n8EG0MV2 uP6z6LKzk2zSVKelBJFY8FVPwrV/BhtftJN7bHfWTEEkDct5XK4ad+N1F8H5F8LSE9Bi0Zk70Bwn PB1eiYz/v3Y1/PD78IP/gMF+6CiC5q2IR4irymU48CD0rz8Fx52EBI7rNcVpoRjCNoN6CP9+K6x5 1lqH+GnXJ2jGuZ3jRyEMleGUM+BtV8KpZ9rJRmJmltnAWhAzb3uMRSHJNQnaVkSOPAZesRhOWwbf +gb85ufQ2WOsZpzajcVZqZhs0l/dgBx3MhoENG7JMrVpGQsBaqzEQ/fD+y43vnqc83dGUZtGfPxq 1QxcXX4lesnbkI52kiZq51ga2ahNODXJGXcWMlMEETXL6pTKyK1fh+/8M5R2QqHNuEoIVENYsBA+ 8n+JTj6VAElqk2Qqrz3j0FqC2L4Nuf4j8KtfmKySko7kxv5901wmTKxw4hnon16DHLkUcnlTWEg8 BmcX97I9soo0b+XIxGDFgiDpELRWQ1Y8Ajd+Ap5dadK91Rr0TIcbPo+ecGoaWNvOxGvBkLnSDdPh a8NfVO20n/vugXvvMUtJQurbxyUaY/G1JqUMORPEC8ZFKpfhsivhk19Alh6fZI3cYYCkWZkahzT0 aAbxcUXStK2Yyl8pFtCTTodPfwXOOR+2b4O589G/+xyccFpahuGUZHgMmbUQSpT0tiqCbOuF974T nn8Kih00rWBPnAcagFbNCPIf/jnR8rcgnZ3OyzLWlDTNuiZxxpbN8I0vw3kXwMnLiIJ49e+MXXtG yLAgNPFrVevIEzfD9Z+C5w+Gtnr6QsHOgx6jL1gA8iC1dDGCD10HF7wRDeKlHrPZq6rGwbyJZxJR qCnrNtfts0l7InMuE6ShQfJLdROUb4W3b4Wz15ulUqKc9a/UZlPGkrrZc6HYAR/6BLzm99AgsEMP zcpkjQWCRNYZEuy2vmIG3OJ4Ixl584xEJgUB1vQLgCLbfwz9j0E3sHwzLH8a2kpQy1m3xq3p2U/i ifUawvs/jL7+jWbPN7t8AWozMlnE3oMoTqQmlazaUIU+uWc07B+ZFITYdKWiEPbDS7eYJ0KgBpxe hv/9NBw4aEQRf8Fx6jDAZFHcuQS7P1ESBJsSDEwV6vv+D5x/EXFvKrHnnWH3Ow7iA9KA3qR9Axt8 i88ovQyZFITGlgFB+++BvsfNlcaVE3XgEIUrnoHjNsBQwYrBDkqoHXlNW8VuTmSfT7a+wuTu3/D7 8KbL0LY2Mtv6PU0hk4KIe2WNSsjGf4doZ1o5EQ/EVTEu1B9sgotWQj6E0FoLqdnDJKNkIyBpLj5W WqUMZ74arvpzU4Lh5PY9U4NMCiLxd6tbYNt/pY1anB8w7o0C5w7BpU9DZxmqBRtXJOmW3ZzEmayj mExM93R434dgzmzi0RDvYEwtMicIRe1aYgI7/gcq/Y29/PD2rZi44pga/NFKOGojVHM2OI5fMIIo 1LUQtqzhXVfDEUeCBkiStoxGfr9nUpI5QdjwAdE6bPnnYU+we5e+CswBLt8AZ2yESt4GI/YjxjUU 4sQWinlNtQTHHw+vf5MNQEmjZ3HXgPVMdjIniNhJ0aGnoHfF3l+hYILtHPCmjXDpCmivmvGEpHHb WWDJ3ArMmwT03e9Hp88Y+4/jaSkyKAhMY+2/F6rbRt85R/bntCpcuQrmlKFUtE/mncySFUa5Aue9 AU4+3RsCT0YFUR9CdjyQNtDRuPBxWFAHFir84Wo4fQ3Uxa5uoRBE6WDezNlwyWWQzzUsp+SZmmRS EBr2Qf+vd80qjZYQ6AKWb4fz1hh3KcqnAXWlDGeeA0cehajdScgzpcmkIKT8LAw9ZX7Z1147Ti7F K65cMABXPglze6FSMKUZqnDxm9GunnFf/nXXU00B89QCHzGDglAYfCKdH7+/nXbc0GvA4jpcthYO 2wZDCocdDUccZSpAx3sALlnCv0ll7FlBTSm/mcgUZf6jZlAQwOCv08djcQfdko/5wFXPw5nr4XfO QTu6nILo8fu6NE4DqySVqJMSMXVgkU11S8Y/Z/YWGQgHYfDJXbeA2x/c98eW55I8LDkOckFSvWqm gI4PQpCIoBbCR/9HCaMawaSKY+xkJFVCm07/wFkBC3qy+xmzJ4jqFqjsSHv1scCdE6OYtOyMI9EZ J9pJSE659Dh9V0K673MYwqd/UzNu3ZjP7Zhgkvtu1qV93eHtLOiZ0CvaIxkUxEao7zCP47q7+PG+ MlxcITD9TCjONcvEEM8kG9/ZZBJP8BeFdoG8ZNWJ3Q8iU1tGDqohq7dGnH9EbqIvardkQBDpJusK UH8BqfelAfVYWImRjtHzSuO2JO1//KzD8PPFMy52V3bV2jj1Yiqs2a7pGFAGR0Iz0B+lN0VUkcpL zQ0wFbOCdueS5p3D4+B8lznhmZ1KmE6HzBwZEER8awSlBuUtzTmJq7GOBdC2oDnn8TSizgOBx/uF odruSpcnnkwIIkEVKr3NObbrgnUsA2lrznk8DnFhpX0cQHUwZLAiu7wsK2REELEXXYd6kyyES3EB SHYDu8mHJHPW6yGUaprGTRkjA4JQMzgVrx9U29q8U8VzfToWkol8wqQnLruHeBmVWgSDNbWTGZ2l QDJCBgQh6eoQqhCVmnKK5F8BCtPManyecacWKaWqtQ8ZHITMSKtwgiwdaurhESDfBlldW2mSE0ZQ CceqBGHsmWBBxDfEaZxRrXmns0G1Bh0Z/ComMU6mSRXqyQJqE3hNuyEjFoLG9FwzcFLf0pD98Iwn oSq1ZC3eeDg2O8qYYEE4Q9F2oJag3fzejHsUHzMsIRn6EiY9Tt+jNncy/O9ZITsWAlsBGo8PjPXN itzHtclbbp1xJF7IhDjLlK1R6wkVxC65aBEIOpt3wvjeVwdoVIhnfBAkEPLxykAZXGd2QgXReDNs aWthTnNOJKTjEKX1oPU9v8fTFPJAMcOrOUy4y6Tx/1VA8lCc26yTpAqseEGMK0riouYDaM/7tOtu GHZDRKA4szkupXvM8oOgjeldnfAvZ6LPPxJjf005ETqKpDFcxj72hGeZGrI9koO2uc29SYJxmcob zGkaqgcm5ttJN2DRcfoZCTUzluTlXjcanGPZdXQLOaGzIDRstJEhUWTAQjj1LuTQtgOSQrAxvVGu 21QFSk/Z8Qi70fp4ZzusGpUIjXc7HdeTjyASFWiYRjsWS57ExzP3OJ9Xugr2dGO589MYMeExRGNd BZA/GHIzGmdzjvUNE6D/l0mjnJDvI16FIl5NIZ40I+Pws1scYYzlXnrJ+I/S1S10F8e6txs7Jtxl amj1CrQdAIWZjS8bi3vntoMc0PtrqG0GgqTadjzjiIZzaYRZiHmczr8nocSjZmO177dLJCztgfZC fBkZMg2Wia2BVoj3m1a7AbkU5kL7DKiQpkrHwnIPyzSVdj5DZefjzCjMTxrieH49klyUEklAZyhE oRCMiybixp7+KwJD2DWiMNv4joko4v3ERSBSFncF5ILG4zZBevvMxArCug0N8/tz3dC5FLb/tnFt pv1BGx9XFa7u6+HoF9fxFzMi8hqQLEUzBqfb+8sysujICbdfWiCK9rwKzZhdn1M3JvF1CHz18ZB/ exzIj2HhXaSm1N4e79CZziaZlqyIASZaECMiMO0M0Fv3bW2mkVpN/LcAHqkJH9h5EvdU5nPAi/fx h0ddysxiF6hdDmbcsCMwChJEvGbxeEeXChrYvSqV3rJQeqhurWWQum/7e0tSQwh55eh5+3m8JpOB oHoEuo81Ut2X6gq3TTnJo1DgzmoX7xk4nXuqB0EuZOPAan7b+5y77sf+XfcoiL1FwaRdJyLENAkl cxGbB5UXNwvGZ4stxFjej4h8QVg0M0v2YFeyKYj2w6Hz6H17r5uZsr1Tr8D1Ow/k9f3n8mA4F4I6 RnEFvvDsD+mt7TSFyONZ8KeCiiT76Y2vbYhjpvTzPrlVWTUQOsG1MjYFkOlYwwndMLt9DA7ZRDIp CM1Ph55X7pu5drK4KrBWA64ZOIKPl042a0+7u48GRe7c9Bt+ueM5sEH9+GHMX6rb8Tu5IKhjlUKF n64JGaqRBtLBWLlwYkxhJCyaGVDMZzPdGpNBQSiS60JnnvbyL91DOjsEflMLOKvvbL5eWYpK6LzY pq8ESpU+vrb6+9Siuj17/F9kLUZzqmJFAtvchiUVxoHUkzSp7p1V+MGz1joYH8555didcMnCgPZ8 BpucQyavTlVg2tlp5eueWsvw5wSGgH+pTGN5/7lsCHtINnLf5Y0CuTb+a8PP+NGmh9NeOllZTpis c69VjEukIty5WnmuV8zasmCD4DGyEHZcY1ognD5fCDJc6QoZFYSIIB1LYMYxe94m2u3w7c82hat2 Hs27dp7LRu0g3W10NweQHApc98S/sLHcawJdm3lJ9nCYZEicbhXoG1K+8FBIFMTWMM51j5FlDIwV mtcNJx0g4zf4uI9kUBDGD9JA0HmXv3zy3bpNCqwI4V0Dx3Jr+XDMdrvxqN5IB4jTihEEeX67YyX/ svZOmyFUlIBJqgdnGEK4f5Ny70uhGb1P9vS2rxqLxhsBdeW4A4SF08Ts5ZdhMnh1joc783xo69lz ZxVBPYBvVWdwQd953F491AohHsTY3ZdqhSIAOQgCrnvym/y89xnzrKgtLch2j7YvxLFLNYTP31cn rDsj1/HIso7FqKgmg6/nHxwgOc18B5NBQaR+fJSfC7Mu3mOb3hnA3w/N4cqBM1mvnSChfdKt+diL Ri15SvWdXPfoLWwY2u4E1xn/Bl8Wt2Yq9TEjVX64KuLHaxVyTjOIY6Z4g/v9whyjWFROXxSnlrPd wWRQEKZXF1Ek1w4L3mzKOYZ31gJPhwFvHziea3aeQ4WAUfu9ca49/sm1cc+mB/jgY/9AOazZhMue gpgWQAXVdIxFNUJRVu2I+ODdIXUgmfXfDPFHcNasHIdON1k1zXiSIoOCiEM++zP9HOg5zuRRzdNU Be6t5XnDwFn8Z3kRSIXUPI+i8YrTG8aP8518Z92P+fgz/8VAvZpeR4uikto5tZNyBitww08j1vRF 1jo0cT6GKqccIUxrB5PozfbiDhkURDyCqmbHyqAHFr47CS0U+Gp5Dpf2n8PqcKZ1kexOislWt6M5 mdMSYksR5Pn0Y7fwtbV3tbzLJIjdyNF8jmpduPXhiH99PDSD9Rphh8ubwsyC8NbDc+RtGa9KJptc QkavTpKScBXQmRdAz7E8H8G7B4/g/TvP5CU6QeNiNGgoXBoNbnlCMjcgjyJc+9hXuGXtnZTDJi6v 2WTiIg0EIlW+9HCdP70nRIuxdYSm1ZxX4dWLAk5YYE/UAp5nNgVh6+fj0VQpHsCa2Vfwvr6l/GN5 KarWKogrgn3syUeq1xAgyFGKqvzFbz/LN56/h1AjULvxuFM+nfjm+3b2MWbXqxAz5k4Ywd1r4C9/ HlKP7GBLw0DkGJy74eYoBMryowNyufS5rNvbbApil9HnHPmF72FVx9kQDdqrHi6CsWqSmh5KCgxo jff+9ib+ZOW/0R9W4ixicqFx+UMmlsa0iwjHIo3ULi4cwreeDPn922pUago5977JsH/3A3fcIhLO PkB49SGBqZ0Sxihz1VyyKYgROLhjGh846k2AKRQbnxHPAKSAAl9+7Ct8+LF/Yku5z0Q41loodkRb hWiiv+04E2f/DUSpR/DVByPe86OQwXCcRhpFIYy45JgcC3ucal61JSMZpmUEAXDxgtN5zfxloJUm 1hi5x7XZF8lBvpMvr/4Plt97LXdve4qammLBZDnGDFQlqM20xbp4oU+47q6QP7vLWoZkrK0JF+q6 S3U4sFu4dGlALnDGHxrNayZpGUEosKB9Ju8/+n8RRBHQxJX33LkAUZy5MoWA921bwYU//wjXr/wu ffWysRSK2QB+wifNG3cvVOWuTQ+z/L8f4e9+ExHlxJRmKDStQbpDGXXlimMDFvTY/ceTxEX2YwjR cZ0Vsz8Yt6Smdd7wwM3cufYHkO+mOb1dXOEnEEVpz5b4wHWoD3H07BP58NGXsnz+yUwvNC7SPBFl ULWozsP967hp9fe47fkfEUUB9L4Dti0Hik6h4/Ar29+rdfy0CJbOEL7z5hzHzs011F+al2W7QKyF BAEmYBQe7H2Gy371tzw7tNGOslp/ZbxHQesVgkInbz3o1bxt0XmcM+doOnNFRANU1NaMStJ5Ngy0 x6JDrf5GKjOR5E8qkW1UaQFe/MpqVGX90A6+se5uvrX2Lp4bXAPSZq1CBNvfCNsvg2jaCKKIrWEw unbaUDlgH6hATbnpvDzvWyYUcqM8ZgZoGUGo07RUI77ywi/54199FPJdJK1jPG++xAOBAuEQIjnO mb+MN73id7hwznEs7ppLjpwVxrBsmE0rO39x6nyk4Y/xWiC7VK6osqnSxy/61vAfa3/C9zbeT3lo MxTaTcyTWLQIggEoHQubroLSEsdRNpJNFhXY2w5FI+f6nSurKaceEHDn5UVmdjTYhpahZQRBvOwh gEJ/vcxVD/49337hLsi1E6/7M37zQAUTxwQklbVhBYIix/ccwpkLlnHJvBM4bsYipuc7KQZ5G9OK bei7zqPWEf4aay6KIqpaZ2e9wrODL/GvWx7loY0P8XDv01SqA+ZFuQKptYx7fdvQpQT1mbDpT2Dg TMg5AogrXPe28TrWzQTL5nExDPj28hxvXBKkmXEviGZhWobaWEKA1aWtvP7nH+HZgTUQ2MawS1/a JJL2EJCsuhe7M1ENagOQKxB0L+Yds5dyzOwjOaxnMYvbZzGv2E1PoYO2oEBOAgLH5YuIqEUhpbBM f73CpuoAq0rb2TT0Eo9veYrbt69kx851UBuEQjfkirbxR6C5YY0wtji28lfq5rXbLoXtbwFtJ50z sg8mVpVk2ZpqxNUn5bnxd/N0FkjWbc3elih7pmUEEWf1RNJ+VFX52fYnOf/ua6hJDaQ4kVdH2rCs xYjqQGgX6xICaWNe2zSm57vpap9NvthNkGtHcmZtR43qaFgjDEtUSlsZCkv0VgfZVh0wjTlUCHIg edt23TkfrtvoNm4r2ORbDiGowOBZsPkKqC7C1IONouEmFsUSCd0dEave1WYyS5J2X95CjCNq/fFP rbyNv3zsi2humnlCrCuT+Pn7suJZE3BvtdaML64KdkwjSRAEeWPxEp01oVHJENTnwYa/gKETIYjL 3N14YjcNOnZfbSzUFob800VtvPV46wpq/Flaj5YWRPx9DYYVLn/0Fr7/zG2Q6wAtWFcgxJZ0Tux1 7okGfxxMT28fNyseilf3DoYg7IQt74LeC0AKqTURdh9kS5RWC9ThA6fkuP61ebuIsXUdd7FUrUFr CwKSBtVXLXHJ/Tfwk/U/g0JXg+cybnHFaHAvKRZFIg4aw4BmXYCAmXtegd7fha1XQH2GE4jv7r32 oqrwyoMDbn9LjlkdYuN5MZm15BCtJYjWtGuW2HsG6Cm087kTruTc+adAWDZ+cQTGSmRMDGAvXoeJ QIY938yTx+fPg7bBjDtg4SeguNYZQNvdBZgBuFPnwM2vyzOzI7BljvFG7Jm843tFy1sItYF23OU+ PfASb/7ldTzW/7QZo8jax4uvJ5ARWs045e5V7fnjabfWXEkZ6nNg6+XQ+3smFhvpUkKlJxdxx2Vt LHtFYI2NJod2rd/El7OMjpa2EBB3qukg0RHTFvCPyz7EK2csgdpOEp+XmvTBAAAGiElEQVTc3SR8 IkUSl4SMeAlx2ngcrkEhnYMeW4x2yPfB/M/B3FvMgJ7atG0cE0RKZwFuPL/IaQfZPT0SUYktdrT/ tpgYYBIIYjiCcPL0Q7n51PezpOdQCEskSzQS2VHWib7KLBKPhRRMcD3n2zD/S5Dfat0qTEcSKtee needJwR2sY6oBUr29p6Wd5lGRM0ssWcHN3H1gzfzk033Q2EaRhDO3geeEQgxRVDx6PZcM7rdfwr5 IOCzF+S54viAjpx59R5j7xZk0gkiQs0UYVEiAlb2r+NPHv06d2/4JeTbSN2Ssdira5KRZLYCkJqx DGJTs5vew3Unns+Hz+igEO8iiokd0gLW1r+fk9JlMvmRAFFlybRXcNsZ13DxoRch9TJmYYJ4ZT9P AxrYsCIimUBRD5Ag4rMXtXHNmQGFQpx9UgJVpyaw9cUAk9BCjIiawbvPP3M7f73iG9SjGuTaSILK CNJJ90rTB8YygVPpmjy2A5lxKjgqMS3fxedO/zDvWHhmsrTnLtW7k0QMMFUE4dSR/mTLE1z+wGfY OLAGcp0gtiBOh9XzTGpRuAV/YquE45FMu05TOMg5c8/gC6f8KcdOP9AGC+OUFp5ApowgsCOoCqwY 3MwnHvs6t73wE1MyLXl2Gc0eafR4sqGYmiONUkFoDaIq5y++mK8ufRuLuuY22BHDJL0fTBlBkBSk xVWzA/US33zpQT752Nd4fvAFyHcYYbiTXyatlbD1RuDULgnUh1g4bRHXHv1Wrlj0Woq5vK0qjq1J 65VijJapIwggtgBKOvn9vm2r+OjT3+PnL9xFFORNpSmOICadGKCx0MuUYYhWOW/+afztCe/h5J6D KUges1iczSXZe9GKJd2jYQoJYqT5aKb3qxFx1+bHuWnld7h742/MRuNBW1rm7IyEZ79KZy+qApOv PIKwwvEzl/K+Y/6AP5h/Cl25dqdSNX65u4f35BUDTClBDCctQhMrlg2l7Xz7hXv54rPfY23/OjTI 2Zl4pPFEHJAOL4/OhDUZqdE61iCu/NUqaMSsjplcfehFvHPR+RzWNd8uijy1mcKCSIlUCWILIsL6 oW3csvZ/+M66u1nZ97QJPHPtpA1upHU0yIAoAhr2DUiIa7gqENaZ3T6Ltyw6nz9e/AaW9Cyw9UeT 2xXaW6a4IMxHTxZm0XT6YxjV2FDu53sv3c831/2Ux7avoBxWjDiCAGflL7LTkBzBKjZgDkHriBQ4 vPsg3n3IhVx84DIO6ZxLey7v1CGN9/bx2WRKCyIp+49j6DjcVtIeU6C/NsSPtj3Fbc/dyQ+2PES5 vM1aDTvNU3IT9yF2wbp0URXCOtLWw4Wzj+OcV5zL5fNP5oD2mcQTedylZyZbTdK+MqUFYdzqCLHz f5MclAqRKEEsDms1SmGZjaV+frj5EW596V5Wb3qC7fU+cyzJNWaoxpw9BPQakszNVmVasZODeo7k HQe9itcfcDKHds2jO18EgoaQ2+jBLoA2XqXnGWdqC2I/qEZ1nhzYwM92rOK3Lz3Ef/c9x/ad66E6 AISQ7wQpms1INHDM0QgksYc0joMkz0HjQgli1oAKy+ZcxZnM6ZjHa6cfxskHnMyrZh/NsdMWmIyR d4RGhRfEPmIG+BQVGKyV2V4vsW5oIw9te4Z7+p5n/eCL9Jc2sb7SS6k+mPok6uyx1rD6HWnjj7+R OKsV2KK7IGBmsZtZxWlMb5/Pgp6DedW0hZw16ygO6pzHzEIn3fl2chJkL7xpEbwg9oOk00+mZGK3 a1OG6hW2VwZYXd7Oumo/O8t9bB3axKahzWyuDNBXLzMY1tkeVegPa5RQOgJhWpBnVlBkQaGT6bk2 ZrT1MK9zLrM759LdNoPD2mawoNjDnLZpdOfbkqDYRgLO7+7X6lWxt3hB7CeqaQxi/kBaImIRINKI UCPqqkQaEdmR8gjzY94myXKXORFyEiAi5CUwj13zYS3OiMnSpEzFu0ujxQtijIkbaDzg11hBC+nS kXvbVEdo8nsYMkg8pQkfE2lNvCA8Hgc/bczjcfCC8HgcvCA8HgcvCI/HwQvC43HwgvB4HLwgPB4H LwiPx8ELwuNx8ILweBy8IDweBy8Ij8fBC8LjcfCC8HgcvCA8HgcvCI/HwQvC43HwgvB4HLwgPB4H LwiPx8ELwuNx8ILweBy8IDweBy8Ij8fBC8LjcfCC8HgcvCA8HgcvCI/HwQvC43HwgvB4HLwgPB4H LwiPx8ELwuNx+P8eFd5AscabZAAAAABJRU5ErkJggg=="
      x={58.989}
      y={126.411}
      style={{
        strokeWidth: 3.42072,
      }}
    />
  </Svg>
)

export default google


