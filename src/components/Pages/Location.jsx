import { useState } from "react";
import HeadingWithUnderline from "../UIElements/HeadingWithUnderline";

const Location = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const cafeImages = [
    {
      id: 1,
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUXFxgXFxUWFxgVGBcXFRgXFxUXFRcYHSggGBolHRUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0eHR0rLS0tKy0rKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS03NystLf/AABEIASsAqAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIEBAMFBQcDAwUAAAABAAIRAyEEEjFBBSJRcWGBkQYTMqGxFEJSwdEHIzNicuHwJEOSgtLxFRZEosL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAApEQEBAAIBAwIGAQUAAAAAAAAAAQIRIQMSMTJBEyJRYYHwcUKR0eHx/9oADAMBAAIRAxEAPwDxNCc9hH6pq0BCEIBIlSIBCEIBCEIAJUgSoBCEIBIUqQoBCEIBKzVIlpxInTdBZbiCLNt21SK17ymzT9ShXuqaVpB2UNSlGiC2NE9rp19VlpChSOp7qNECRKkVAhCEAhCEAEqQJUAhCEAkKVIUAhCEAhCCgEIQgfTcnaGyjLU9+1oUEjRI/JD6f+boBKco0rEJFJVFwkezoqyYhCVUIhKhAiVCED6NPM4NBAkxJsPNWeI8P91H7xj5/DsoMOxpcA45Wk3MTA7LQ41SpgNy556OAEjrbRQZKChBVAhCEAllIhAJUIQOa/qgXUtTD7jRDGC+ym10WUhP0SkeXilc4T+aioXahPATKjTITyqhrmKMqWU03SFMQgtSKoVK0JFpcF4XVxFVtKkwve7RoE9yeg8UF72c9nqmJdLWksaYcdL9B46LqPaD2Br5BlaMw0En03Xq3sL7GnB4YU35cxcXukB3MQBEdBC28ZwVzhyubPiyPmNFyuWW+I3McfevkmtSLSQRBBII6EWIUZXpvt/+zbF0nPxNOkalMkueGQ8sm5MC5HkvM3BdJeGaRCEKoEIQgVCEILeYSb+ia59vzTRdDHLLRY80IN42PZBGs+oQR1DcJ+VMqahSAyEQ0hQkqYlQKwqRpSFia0qQBBEvov8AYTh8KOH56WU1y5wrm2cGeRvUNiCO5XzxlklW+F8Ur4aoKlCq+k8feYYt0OxHgUR9ioXzjgv2xcUYIL6NTxqUr+Za5qlr/to4mRA+zN8W0jP/ANnkJo2+h6lQNBc4hrQJLiYAA3JOi+T/ANoeLw1biGIqYUAUXPsWiGudAD3tGwLpPnO6j9oPa3G422IxNR7fwTlZ/wAGwD5rBKAQhCoEKWrSAiHTPgRHrqokAlSIQS1GHVNz9Vt8UwYboCPA2PksbJNtFBMysLDX/OiXW4KgDIIBVmqbki46qVqKzxDh/m6fmTSOYKQN2FkDHDwUL9VNnGiRwBViIlJCRrU8IIxqnhNGqcgaQmynqN6IEhQgqgQhdf8As24AcRiA91IvpNBmGl0uOgAHTqVnK6m1k3XOYxjsrSQI8ABc9YVNfT1f2Wp1qJpuwpAyFonI03BEgACSvAPav2QxWAflrU35CeSrlIa7pfQHwlZwz7lyx0wChaTW5abCIGYXMJFtnTZ4nVaadnHXQ/qufbG5gdRqrhxrCLtHe4+huqLGZjZUS0mNL2NbJvpefJXjQBmHeF+oPUfoq2Ep/v6cG5JuQYuLLdGFzElzYLROYGd41Fz5rnlXTCRzlai4VGtIjppvN7KSpTI6HsrmLpE4ikGGTETIuZduFarYDK0OeCwl0bRFiLabqXImPlz4YS4iJTJIWk3Dn3jyCbHXylRtwpc4zf5LpGKphyUJ2Lw+VyZSCBNyhOi5SEKBExyeUxyoRCEFVCgi0iRNx18F7/wD9r3CadJtMUKmGDRHu2Uw5o7Fpv3N14A1pOgJUzMI8/dUH0Ji/wBtfDWiWNr1D0DA35uK85/aB+1WpxGi7CsoNo0XFpdmdnqOykObeAG3A09VxLOGOOpA+atUuCg7uPyQVMNi2hgY4TBka79kLSHDaTfiLB/U4IUFt2FwzzdrQTsCWEHrA/RVT7PuuadQWgc9iZ6EW2Vri1F7aFSRywy+YOE5xpv8lR4LhKr2lwq+7ZmAJIzSb7EgRc7rnjvXFdsrjvVidmCrsq0/e5SxnNmbJbpoXNEg91sUcOHgvY9pAvDgDYnQOYba7gqv7+vQIqBzazBBOSzgOwJBA3gnxWngsQzEU/eCm6CcpOTSLkZqdxeL2Wc7lOa1hMbxGFxJmTFUCQ0w0E5S4zDnakAHSFrYei57CWPEC2V99ju0fUKhiiKeNw5DyRAdch2WS8ESLnTfqtx1Z74LqbXAH7sO18DDvRZyvEXGc1z2Fwc1qwAEAzbQCLQkIDXkE2I1F/VV+OF1HEOyB7QQLnMbxcS7UKo7HAkREkCe41henHw898l4pBcIvZVsPTmekgeGifVdmNhBEk+Ku8IphxcXOMAt2sZBseiZeDHyzadDmcDaw+cpr6BBg9Nlr0KUVXgieVlmb6iYAupa2G5+VsnKdNYjoOk6XXPu5b7eHPvZ4KNzVq4jCxI3BvsfQrLe2y1KzZpIymzU/WFIKtMdPSVSQtsr/wBvaNGk+gTTxJ2zW+clUkKC07iNU/ejsAFBUrvd8TnHuSU1CC5wfiH2eqKvuqdWPu1BLdrgdbfMoVIpU0Ov49RqDDOlzXNlomC1wvbcgrH4e97mtpiXNDswbAN7TrstXjeKpmg8NAEkaVHEai+Uk3Co8Bqhp0JJECATHjAXPpeHTq3lcxT3UHgtYWsfmDgIAcD90lpInx1Vz2VxGSg6HZT7wwC2R4jODI9EcRc3JD25ZJPh3AdcFRezNHNRqnITDiQQH9WAyWa2PjCvVnynTuskuOcamOwhe0PaZgA5swkyDIHotqiKQOUfu7zBzAzEfDU/Jc7iq/8ArcM0HKWkiSCYzaS0xEdLLV9pXO+y1BmYdzAc2RvqT4Lz5T0x3xy5yq1iq+rDDxmgAtAG99SOnRY+I4dQeS59NwvBymBJmfhkRPRYmFdAkPe09ASR6aLW4NiHZyXvJygFvLBIJIF5A2W707hN7YnUmXGlGp7OHLmp1QRfUEabE3VrgeBdTzGqckFsWBBFzc/3RxV76uIbNQ0wKbiSwkWaSTbqbdUUaxFRj2VnPpl4a/MAHNMEjpI5dYW/muO2OJl4WcPRnEvcGh0MpuhtvvGYA/uqvEeKUab45nuDS0ggtLSZkZvC2y0WPyYoxcmiyMhyzzOmTIHquQ4iwvr1dfjcb994WcZMsvw3lbjOPqno8Wc94FSMmmmg2uL6pMTR5T3PiLE7rPdh3CbaK5w+XMqNiwAMzca2XXWnHdvlnuQnP1TVtkrQnPaAbGR1iE1oUgYoI0J+RJlQMKVODJQmx2HG2PdQqFwBAAMkNmZEXF1l8JpOFpAzDW5tOltFp+0PDqjKLycmW2hM6jYj81Rw0Pc3IASGCZcWx1+HVc+n4dOr5bGIwIykBwNjIAeS4ASRLjDdFX9l21Cx7mFoAqGW8wkQ3cdxsnY6gbiWtGWSXB17TaTt2lR+ydUBlSxu4icj3ECGGzmWBkDxTqTeJ07rJNx2q/7bhCBLxMNBzQcxygZgL6aq3x3CAYSq91ItfJ0kANibhpiJ6iFncYqBmMwjiX/iJcXN++RbOLTlWpxd+fCVy2rYCMpyumx0IIiw+a43+l1l9TC4DTi72NILLe8a4tgxduUHbdTcBr872EDK1oG+hcTzAgzE9FRwuIrMysc8jl5ZGcZY06gAHyV/g1V1SoS8NIa0a5RYuM3nqSvR1PTXHp+qIOMUM+IY2GtDgQ0iAJm0xptqouHUnU3teXZWe8YIP3jDiJFrAZvVXeJtpjEMD6fJkfALzBMgAhzS42gWVLAvH2ik4nKG1GXPgfp+qzj6Fy9bVwjScUTDan7oRfbOdJ0PgucxjYxFYCWjNob3mwJv1ldLXqn7VY03E0xkMS34+xg31XOY93+pqlwBM7OtNpjqs9Lz+G+p4/KWgeUGxAMwLTF790jqofUqlrIbkaIidBEkjxTiHfA1rySSQIEaTptYFQcOMuq7TSkbTC7ZeHHHyy6mp/zdMUtYXPn9VG1EKwXVhjVGWQQrFIIsMDVZZwx5ourjKWNIDubmBMbeYUDtFv4cN+wv/ecxvkzRo4bb6Spaac/hqrqb21GxLSHCb3BkWQmVDZClxlXusdtx9z3UKjM76hcBlBDLcwM8rQf/ACuOw7ajDOR/SRmBHouuFKn7txyNJDmjPlNpzWkdlGyuwNyBrSJnQzMRIIMzC44ZXGad88JldxzVUvceZlUzsS4rpPZBtWnQqAwzO4RmzCYy9AYFithpwtJ12Br2wRmzzI2JJvKG4iiQXCoSJH+486zrsFOpnbNaOnhJltg8Trv+3YU1MpEgjmLmluYjcCNCtviRfXpOphgDTaWupm56CywOLPp1MZhhJyyGk5ibZp121K3cNUojlD4vmn3gcSQCAIM9VnLLUjWM3lf9Mat7Kvj+PUIEDmYHDrAh5MKThXCTSqkPL3lxDZY17QIJF3C3zWli8VD3Nz/eA+JswJGka3VVteXFnvDd0AjLaCRcRdO/KzVSYYy7ZnFqjPfU5c5oyuu7xc0RzAdFBRxg9/THvDAqMOblIiQdRH1W/icNh6ga11RlTLMF0EiYsIcI0PqqlLg+HDxUZUYMsGA2TMgTd66TqSTTF6dt3E9RxqYsFrmEmjLTAAGV9xYlcvxvC1BXqOym5BloJFwDYwF0WPqxiqZlpJpui1hLxrfb8lNQLXzJpAC7gQLm8X7dVmZWXf2auMu593Ge9rC/PI79vorfCi5zqhIddhGaJi4N7WsCulrUtwaYtzXOltIAVfHVcrS0aReHHQ9+638TfDPwtcuRr6nufqVECpsR8R7n6qJdnBKH3BXT8A46aVJzTh6NRge0lz2jNMGGZpnKYMwuUZqrbDGwWcsdzTWN0s8TxLaj3PbTFMOcSGNnK2dhOypgJQJ9UQkminUabHWdUDLTJa91+nKEJmUEJFpl6E3iFWP4VUeMtjz5ktfEVXMIDXNMtgF7A46yRzaeaWjXAaQ6qx34YpvAncO5r2nzKZiXFoFmGetJ3/evBMZP+voW39iBgqtLS7lmCJqs0m5hriVJj67y6oWP5C4mRUaGgF3LaRGvRMMVCwZiLBp5BEgm8ZtL6JzWU+YZ3nMAAWhjBYzvIIW5WLL+6YeMrOOJwt8zgTbMOtpdot7EueWn4Q4uBjPeLyJAiPNYHFWMpYygQS4WcczhsXCAQBAstqmykafvXOqQXZfjtlAB1a0dVrPxGenOb/KaiKzZMgkkCM7vGb5eyMTVqkEWaZFw5xPjzBtk2tVa5jnim93MIj3oF5kiDzQR5JtZ73Nksc12b4bix/qfp4Lm3aYajgMgfz5jfm0y3GaPA2T8PiZZk5THxF0zqT0vt0TAx4v7lpeXEn4egGmaN3KQYcuIysptENzSG6A7w3stM65/f8MsvIxTHZm/A/LJsOYW8Fo4moQQ5zmw0iWt0PNvJuddVQ4rUNPEsgtYMtQNLBpzA3sNuisur816hlliQDLiHdMxVs8UnvFenX1BvIkFzZsBpbwTMhyn4TI3ZtsApHVdA57zvIBB7XVPG4puacx3N3NHlAGi1jOWbdRzVcy49yolLifiPdRL0vKVpurAcq7Vd4dRZUeGOeWFxytNoDjpnnQEwJ2RYhDkZ0wGJkkHYf3lIHlDZ7nWSqHOUiaR3uGwtJzKjj705AD8YaLkD7oTq1em5rQSYEwTVcHXiQYcJFgske0tNrXNAJDtQ1jRMXFzdQP9qnZcrWHXUuAnvAXm7Mq9XfjHRE0qbmltIzDXSGvqQS2ZvMBMp06BDne5DYgyaYaZJuQHRNly1X2mrnSB6u+pVV3Ga5/3COwaPoFZ0b9Wb1p4kbmIqf6/DktgACA4tiJfflkQt6pxCrlILqTR4vLTodsq86q13vOZziT1JuooXS9PbnOpZduz4hxCk5xca7SCdAJPqCVDiePYfM5wNQyQQABG03cPBcmhPhQ+Lk6Kp7SNmWseTM8z7X8AqrvaB+zG31zFz/qVkuYQASCAZgxYxYwd/JNWphizc8qvV+L1XODuVpaCBlaGgZtfOyiq8SrO+Kq8+ca9lVV5vDnESCNJ3srxE5qm4k6me900tV08Od+Jv0VavSLTBiYm3irLPY1RW1P+bBMVhtAvflbrA+QCcOHVfwH5JbDSormMI964t+EuzN8ATIHkonYOoPuO9FccxgLm1GEOiQdgN8wBG8Xvom0Z9Q318PSwHkICnweAqVQSxs5YBve60nYxjywlhc8NAaTJBbTBAkEwbAqJ1LK7lL6ebmAaZEXNpg7H0VRUdw2qLGm6fL9Ui1MM3NIFd5cQctwOYXA1MgxHmhE3WChS4bDuqGGiT3hIcO/8J9FNtaRoTnUnDUEeSZKBQhCFQBXaOHzN5WOJGuWT5mAYVfD0w43J8lo4aqWA5HvYeoc5p88pCxa1I2eL+0VOvh6WGfgG020fgdTe9rgCOYEuaZnUzusLGUKBvSFVvKZFRzHcw0gtaLfNWKmJrPblfXqvb+Fz3lvmJuo3SXN5abQLcgie/VTa6ZtJwBkiVvcFxrWODy6GmzoBzQ2CI6ystmGqOECmO8j9VZwWC+68hsazomVMZXYt9o8M6QTE6E0yY+S5Hj+H95Xe9haWOIghwAFtxq30UtbCsHwgv/pBA+ip1so0Lh/KRby39VmF+hMG0io6NQ1wt1B2SM+1dH+cFPLYeSHlv9073lQf7oPoVq7IMPiq4e1rpEkat8VY4jhQ+oZqMYJi7hJaQNp6yr/CcBiaxEVKRaNXAh0eBA3S8W4dg2FwzVH1Drkc2J6nlgdlznUky17/AGauFuO2dh+DtD2kVg4Ai1pIm4BB3Vvi+Gc5tv4jAHANBLnNdAcAB4vb6lc7hhFVoFucC2usaraxePqMqvAqOGQjS3Loc3WPyXocNI+GcDr+8Y59MtaHAkmGu7gTKRXuEcTqmqWVHZhDiDvyiZPhAQom6yOEHKHP6fkpv/W51b9CvTMR7JYKMopuaHAnlc4DReXV+E8zsrgBJgXMCbXXL5bd13lsnCxT4rTOojyKTiFRvuSWWDiPCVSq8LqASIPb+6n4kMtJje30TU3NLu6u0PBqLX1IcJAaTB02H5rSqcGpkk3HgIAHayq8CZy1Xfyges/2Wd9ofJhzvUq2W5XVSWTHmNqngKbTaf8AkPzCbW4aSOV2+4/MarOwuIcSZMq9wnFvc4NJEZoNtoWbMpztqXGq+Lwr6ZgOzfL5EqKjUfmhym4viC2qQI/yVXo4kkgEBam7GbqU6jVYLHxTjUGWRBvuqL9T3VrCVAGkkSJVuKTJYbjo+6pDjw4RBUTa9M9B3CWKR3E9yFnTW1ukJJ5GGI1HUdQp6LWNcCaDHeBL49JhZmKxMZQOUgGSL5p0ntf1UnDsU5zoJmx2hS43SyzemrjuJ1ajcriGUxoxnKB3O6yftImGjQ3PnsocbLnRJsdEU2wfP81ccZImWVtWcPV/etGQfGLgu/F0JITMUWuqPOaJc6QW+PUSkDofI2dPoU1zQST1JXWOK7wqnlJfYltN4kEHa1vNCiwbg1tTqWZR4yQhEezNaPdgkCQ30gLxprqznEhgyyYJ5bSY/wAhdvhfaFsFrqNVhgizXFtxHUghcxicc9o/gOnrIc31b9Fxylk1I74696SnRO5E+BP5qlxnDN5ZqtBGxEn5KvWrVqmxA6AZR6qA4KprlJ67+pTHCy72uWUs4jR4OabGOa6oy5mJi0eKt0+G0DcMaexn6Fc77oixCQNj9Vb07fdJnqasdKeGUxoyO0hRcO4cKdXMCYuYI8DusRmMqN0qPH/UforVHjFYaua7+po+ohZ7M9eV78foTH0Q57ieqrsw0EGVrcO4ZUxBkUYaTd+ZzB5AzPkFYx/CKVH/AOQ4u/BAd6kRHmnfJ8uzt3zpzVWncqz9gqNphxFqglvUgRfw1C0KWMa2m5rKMvIcHPNtZ0O9kyriiaFMbMbbrt+i6+znPLJOFf8AhTHUiNitUYgBuY+ilpVg4SNFO6rqMzGj4eym4XSIfPgQp6rRIncqyxt1LbYsk2q4oAZjulqDlHdPxlIkOKH0HBgdaLb3urPDN8h9FpJsm/Zh1K0qXDM1/eROwb+ZKtN4O3d7z5gfQLW2WF7k7H5JV0FPhVLds9yT+aE2ac5SqEXlw7for2H4i0gtruqOGwaBEfzQ4E+Sy3VFFmSzay2eG9U4hRDoZMAWcQGX6RrH/UZT8EDWMWEXJDg0k+EmSPVc8lU7Y1310L8OKdQsd8UZuZwuOrZInfZTUOGGqYZSkfjIaB8gs3hXAq9W7W5Gn7zhH/EaldHhKOEwXM576lXoHaHxAMDzkrh1M5OMbuu2Et5s1GH/AO1sTmyljWj8Uz9LlaNDBYPC3qTVqdLEDy0HndGN45XrAgH3bDsNSO+p+SzadEA2Enrr6DZZ3nl6rr+DWM9M/uu47jFarZv7pnQTJ89fSFlVKcTvpqn4nGsZvmd0Bt5n9FDSrl7XOMTI0sAt449viM27U/tR0tuE0P5IG0KtUI213KkofA7yXf2cZ5IX2N+wT6DnRAMDqoAmydFUaeK0Ze8jzVymCqdZxBZAm36KywkQCbnaVjfDfufWfZwAnWe0Jar5oN8lFVdctAdJEWFoT67ctINg28Ck8F8tnCvGVvYKy16zsI2Wt7BaNNkBVk8OQlAQoKeI9hnG9Ku1w/mH/wCmyPksfFezOLp/7ReOtMh3y1+Sr4XiVRnwucOxLfotvB+1eIbqcw/mAPzEFcN9bH3ld9dO/Zn8O9mq9W7h7odXgg+TdfWFpto4XCG8VXjxkj55W/VV+JcfrYg5Qcjfwtt6nU9lUpYcC5ufHQdgpe/L13X2iztnpn5q5jOM1qtgRTabAC0+ervkFXo0APE+P5BLWyiHvIaBoT+Q3VCvxY6U+XxPxH9FrHH6RLfetKpA+LXpv59Fm1cW57nMENaBoN56nUqu3Gu3Ep2EBzOJEZjbyXSYyOdtqB+GIBU+Ed+7d3Vqu3lPZMwLQWkHqtZJizTh9zbvunNbDHdwtUsSfZGnstVlispk/orIodlp/Y2bFRVqB0B80RFXrEWABJhQ0aTs4cdlco4cuOoAGvipq9INbM6KezW+S0dcymu8gKthWl1gt7B4YNCexfJcPRgKy1Oa0dE8MWdoYAhSZEIrkw9j9mu8R+mqVtNrdJ8/7rmwY0stjhdVzmHMSYMX8lm4drpjntYpDm231sosVxZrbU+Y/iI5R2G6g4j8B7j6rLVxx3zUyysS1q7nmXEk+KY0Smq5g2iy3eHOcn0aGitUAM3Yx8lewLBcxcCyp4b+K/8ArP5rLf2S1/hPZN4cLHup8YOR3ZQcP+E9/wAlcvKYrraIO6kFDxKhCnY4rTI+zhK2gFOhQMNFvRObQHQJ4U9BRTqNADQAdhCnATmp4UDWhPATgEDVQKAkT0Ij/9k=",
      alt: "Cafe Entrance",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/62/f7/20/62f72093b911ae379ab6422e0acef266.jpg",
      alt: "Coffee Art",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjL2gLl_21GfTYVmyNk2ZeYWgi0ThYkJYiWg&s",
      alt: "Interior",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjL2gLl_21GfTYVmyNk2ZeYWgi0ThYkJYiWg&s",
      alt: "Interior",
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/62/f7/20/62f72093b911ae379ab6422e0acef266.jpg",
      alt: "Coffee Art",
    },
    {
      id: 6,
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUXFxgXFxUWFxgVGBcXFRgXFxUXFRcYHSggGBolHRUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0eHR0rLS0tKy0rKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS03NystLf/AABEIASsAqAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIEBAMFBQcDAwUAAAABAAIRAyEEEjFBBSJRcWGBkQYTMqGxFEJSwdEHIzNicuHwJEOSgtLxFRZEosL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAApEQEBAAIBAwIGAQUAAAAAAAAAAQIRIQMSMTJBEyJRYYHwcUKR0eHx/9oADAMBAAIRAxEAPwDxNCc9hH6pq0BCEIBIlSIBCEIBCEIAJUgSoBCEIBIUqQoBCEIBKzVIlpxInTdBZbiCLNt21SK17ymzT9ShXuqaVpB2UNSlGiC2NE9rp19VlpChSOp7qNECRKkVAhCEAhCEAEqQJUAhCEAkKVIUAhCEAhCCgEIQgfTcnaGyjLU9+1oUEjRI/JD6f+boBKco0rEJFJVFwkezoqyYhCVUIhKhAiVCED6NPM4NBAkxJsPNWeI8P91H7xj5/DsoMOxpcA45Wk3MTA7LQ41SpgNy556OAEjrbRQZKChBVAhCEAllIhAJUIQOa/qgXUtTD7jRDGC+ym10WUhP0SkeXilc4T+aioXahPATKjTITyqhrmKMqWU03SFMQgtSKoVK0JFpcF4XVxFVtKkwve7RoE9yeg8UF72c9nqmJdLWksaYcdL9B46LqPaD2Br5BlaMw0En03Xq3sL7GnB4YU35cxcXukB3MQBEdBC28ZwVzhyubPiyPmNFyuWW+I3McfevkmtSLSQRBBII6EWIUZXpvt/+zbF0nPxNOkalMkueGQ8sm5MC5HkvM3BdJeGaRCEKoEIQgVCEILeYSb+ia59vzTRdDHLLRY80IN42PZBGs+oQR1DcJ+VMqahSAyEQ0hQkqYlQKwqRpSFia0qQBBEvov8AYTh8KOH56WU1y5wrm2cGeRvUNiCO5XzxlklW+F8Ur4aoKlCq+k8feYYt0OxHgUR9ioXzjgv2xcUYIL6NTxqUr+Za5qlr/to4mRA+zN8W0jP/ANnkJo2+h6lQNBc4hrQJLiYAA3JOi+T/ANoeLw1biGIqYUAUXPsWiGudAD3tGwLpPnO6j9oPa3G422IxNR7fwTlZ/wAGwD5rBKAQhCoEKWrSAiHTPgRHrqokAlSIQS1GHVNz9Vt8UwYboCPA2PksbJNtFBMysLDX/OiXW4KgDIIBVmqbki46qVqKzxDh/m6fmTSOYKQN2FkDHDwUL9VNnGiRwBViIlJCRrU8IIxqnhNGqcgaQmynqN6IEhQgqgQhdf8As24AcRiA91IvpNBmGl0uOgAHTqVnK6m1k3XOYxjsrSQI8ABc9YVNfT1f2Wp1qJpuwpAyFonI03BEgACSvAPav2QxWAflrU35CeSrlIa7pfQHwlZwz7lyx0wChaTW5abCIGYXMJFtnTZ4nVaadnHXQ/qufbG5gdRqrhxrCLtHe4+huqLGZjZUS0mNL2NbJvpefJXjQBmHeF+oPUfoq2Ep/v6cG5JuQYuLLdGFzElzYLROYGd41Fz5rnlXTCRzlai4VGtIjppvN7KSpTI6HsrmLpE4ikGGTETIuZduFarYDK0OeCwl0bRFiLabqXImPlz4YS4iJTJIWk3Dn3jyCbHXylRtwpc4zf5LpGKphyUJ2Lw+VyZSCBNyhOi5SEKBExyeUxyoRCEFVCgi0iRNx18F7/wD9r3CadJtMUKmGDRHu2Uw5o7Fpv3N14A1pOgJUzMI8/dUH0Ji/wBtfDWiWNr1D0DA35uK85/aB+1WpxGi7CsoNo0XFpdmdnqOykObeAG3A09VxLOGOOpA+atUuCg7uPyQVMNi2hgY4TBka79kLSHDaTfiLB/U4IUFt2FwzzdrQTsCWEHrA/RVT7PuuadQWgc9iZ6EW2Vri1F7aFSRywy+YOE5xpv8lR4LhKr2lwq+7ZmAJIzSb7EgRc7rnjvXFdsrjvVidmCrsq0/e5SxnNmbJbpoXNEg91sUcOHgvY9pAvDgDYnQOYba7gqv7+vQIqBzazBBOSzgOwJBA3gnxWngsQzEU/eCm6CcpOTSLkZqdxeL2Wc7lOa1hMbxGFxJmTFUCQ0w0E5S4zDnakAHSFrYei57CWPEC2V99ju0fUKhiiKeNw5DyRAdch2WS8ESLnTfqtx1Z74LqbXAH7sO18DDvRZyvEXGc1z2Fwc1qwAEAzbQCLQkIDXkE2I1F/VV+OF1HEOyB7QQLnMbxcS7UKo7HAkREkCe41henHw898l4pBcIvZVsPTmekgeGifVdmNhBEk+Ku8IphxcXOMAt2sZBseiZeDHyzadDmcDaw+cpr6BBg9Nlr0KUVXgieVlmb6iYAupa2G5+VsnKdNYjoOk6XXPu5b7eHPvZ4KNzVq4jCxI3BvsfQrLe2y1KzZpIymzU/WFIKtMdPSVSQtsr/wBvaNGk+gTTxJ2zW+clUkKC07iNU/ejsAFBUrvd8TnHuSU1CC5wfiH2eqKvuqdWPu1BLdrgdbfMoVIpU0Ov49RqDDOlzXNlomC1wvbcgrH4e97mtpiXNDswbAN7TrstXjeKpmg8NAEkaVHEai+Uk3Co8Bqhp0JJECATHjAXPpeHTq3lcxT3UHgtYWsfmDgIAcD90lpInx1Vz2VxGSg6HZT7wwC2R4jODI9EcRc3JD25ZJPh3AdcFRezNHNRqnITDiQQH9WAyWa2PjCvVnynTuskuOcamOwhe0PaZgA5swkyDIHotqiKQOUfu7zBzAzEfDU/Jc7iq/8ArcM0HKWkiSCYzaS0xEdLLV9pXO+y1BmYdzAc2RvqT4Lz5T0x3xy5yq1iq+rDDxmgAtAG99SOnRY+I4dQeS59NwvBymBJmfhkRPRYmFdAkPe09ASR6aLW4NiHZyXvJygFvLBIJIF5A2W707hN7YnUmXGlGp7OHLmp1QRfUEabE3VrgeBdTzGqckFsWBBFzc/3RxV76uIbNQ0wKbiSwkWaSTbqbdUUaxFRj2VnPpl4a/MAHNMEjpI5dYW/muO2OJl4WcPRnEvcGh0MpuhtvvGYA/uqvEeKUab45nuDS0ggtLSZkZvC2y0WPyYoxcmiyMhyzzOmTIHquQ4iwvr1dfjcb994WcZMsvw3lbjOPqno8Wc94FSMmmmg2uL6pMTR5T3PiLE7rPdh3CbaK5w+XMqNiwAMzca2XXWnHdvlnuQnP1TVtkrQnPaAbGR1iE1oUgYoI0J+RJlQMKVODJQmx2HG2PdQqFwBAAMkNmZEXF1l8JpOFpAzDW5tOltFp+0PDqjKLycmW2hM6jYj81Rw0Pc3IASGCZcWx1+HVc+n4dOr5bGIwIykBwNjIAeS4ASRLjDdFX9l21Cx7mFoAqGW8wkQ3cdxsnY6gbiWtGWSXB17TaTt2lR+ydUBlSxu4icj3ECGGzmWBkDxTqTeJ07rJNx2q/7bhCBLxMNBzQcxygZgL6aq3x3CAYSq91ItfJ0kANibhpiJ6iFncYqBmMwjiX/iJcXN++RbOLTlWpxd+fCVy2rYCMpyumx0IIiw+a43+l1l9TC4DTi72NILLe8a4tgxduUHbdTcBr872EDK1oG+hcTzAgzE9FRwuIrMysc8jl5ZGcZY06gAHyV/g1V1SoS8NIa0a5RYuM3nqSvR1PTXHp+qIOMUM+IY2GtDgQ0iAJm0xptqouHUnU3teXZWe8YIP3jDiJFrAZvVXeJtpjEMD6fJkfALzBMgAhzS42gWVLAvH2ik4nKG1GXPgfp+qzj6Fy9bVwjScUTDan7oRfbOdJ0PgucxjYxFYCWjNob3mwJv1ldLXqn7VY03E0xkMS34+xg31XOY93+pqlwBM7OtNpjqs9Lz+G+p4/KWgeUGxAMwLTF790jqofUqlrIbkaIidBEkjxTiHfA1rySSQIEaTptYFQcOMuq7TSkbTC7ZeHHHyy6mp/zdMUtYXPn9VG1EKwXVhjVGWQQrFIIsMDVZZwx5ourjKWNIDubmBMbeYUDtFv4cN+wv/ecxvkzRo4bb6Spaac/hqrqb21GxLSHCb3BkWQmVDZClxlXusdtx9z3UKjM76hcBlBDLcwM8rQf/ACuOw7ajDOR/SRmBHouuFKn7txyNJDmjPlNpzWkdlGyuwNyBrSJnQzMRIIMzC44ZXGad88JldxzVUvceZlUzsS4rpPZBtWnQqAwzO4RmzCYy9AYFithpwtJ12Br2wRmzzI2JJvKG4iiQXCoSJH+486zrsFOpnbNaOnhJltg8Trv+3YU1MpEgjmLmluYjcCNCtviRfXpOphgDTaWupm56CywOLPp1MZhhJyyGk5ibZp121K3cNUojlD4vmn3gcSQCAIM9VnLLUjWM3lf9Mat7Kvj+PUIEDmYHDrAh5MKThXCTSqkPL3lxDZY17QIJF3C3zWli8VD3Nz/eA+JswJGka3VVteXFnvDd0AjLaCRcRdO/KzVSYYy7ZnFqjPfU5c5oyuu7xc0RzAdFBRxg9/THvDAqMOblIiQdRH1W/icNh6ga11RlTLMF0EiYsIcI0PqqlLg+HDxUZUYMsGA2TMgTd66TqSTTF6dt3E9RxqYsFrmEmjLTAAGV9xYlcvxvC1BXqOym5BloJFwDYwF0WPqxiqZlpJpui1hLxrfb8lNQLXzJpAC7gQLm8X7dVmZWXf2auMu593Ge9rC/PI79vorfCi5zqhIddhGaJi4N7WsCulrUtwaYtzXOltIAVfHVcrS0aReHHQ9+638TfDPwtcuRr6nufqVECpsR8R7n6qJdnBKH3BXT8A46aVJzTh6NRge0lz2jNMGGZpnKYMwuUZqrbDGwWcsdzTWN0s8TxLaj3PbTFMOcSGNnK2dhOypgJQJ9UQkminUabHWdUDLTJa91+nKEJmUEJFpl6E3iFWP4VUeMtjz5ktfEVXMIDXNMtgF7A46yRzaeaWjXAaQ6qx34YpvAncO5r2nzKZiXFoFmGetJ3/evBMZP+voW39iBgqtLS7lmCJqs0m5hriVJj67y6oWP5C4mRUaGgF3LaRGvRMMVCwZiLBp5BEgm8ZtL6JzWU+YZ3nMAAWhjBYzvIIW5WLL+6YeMrOOJwt8zgTbMOtpdot7EueWn4Q4uBjPeLyJAiPNYHFWMpYygQS4WcczhsXCAQBAstqmykafvXOqQXZfjtlAB1a0dVrPxGenOb/KaiKzZMgkkCM7vGb5eyMTVqkEWaZFw5xPjzBtk2tVa5jnim93MIj3oF5kiDzQR5JtZ73Nksc12b4bix/qfp4Lm3aYajgMgfz5jfm0y3GaPA2T8PiZZk5THxF0zqT0vt0TAx4v7lpeXEn4egGmaN3KQYcuIysptENzSG6A7w3stM65/f8MsvIxTHZm/A/LJsOYW8Fo4moQQ5zmw0iWt0PNvJuddVQ4rUNPEsgtYMtQNLBpzA3sNuisur816hlliQDLiHdMxVs8UnvFenX1BvIkFzZsBpbwTMhyn4TI3ZtsApHVdA57zvIBB7XVPG4puacx3N3NHlAGi1jOWbdRzVcy49yolLifiPdRL0vKVpurAcq7Vd4dRZUeGOeWFxytNoDjpnnQEwJ2RYhDkZ0wGJkkHYf3lIHlDZ7nWSqHOUiaR3uGwtJzKjj705AD8YaLkD7oTq1em5rQSYEwTVcHXiQYcJFgske0tNrXNAJDtQ1jRMXFzdQP9qnZcrWHXUuAnvAXm7Mq9XfjHRE0qbmltIzDXSGvqQS2ZvMBMp06BDne5DYgyaYaZJuQHRNly1X2mrnSB6u+pVV3Ga5/3COwaPoFZ0b9Wb1p4kbmIqf6/DktgACA4tiJfflkQt6pxCrlILqTR4vLTodsq86q13vOZziT1JuooXS9PbnOpZduz4hxCk5xca7SCdAJPqCVDiePYfM5wNQyQQABG03cPBcmhPhQ+Lk6Kp7SNmWseTM8z7X8AqrvaB+zG31zFz/qVkuYQASCAZgxYxYwd/JNWphizc8qvV+L1XODuVpaCBlaGgZtfOyiq8SrO+Kq8+ca9lVV5vDnESCNJ3srxE5qm4k6me900tV08Od+Jv0VavSLTBiYm3irLPY1RW1P+bBMVhtAvflbrA+QCcOHVfwH5JbDSormMI964t+EuzN8ATIHkonYOoPuO9FccxgLm1GEOiQdgN8wBG8Xvom0Z9Q318PSwHkICnweAqVQSxs5YBve60nYxjywlhc8NAaTJBbTBAkEwbAqJ1LK7lL6ebmAaZEXNpg7H0VRUdw2qLGm6fL9Ui1MM3NIFd5cQctwOYXA1MgxHmhE3WChS4bDuqGGiT3hIcO/8J9FNtaRoTnUnDUEeSZKBQhCFQBXaOHzN5WOJGuWT5mAYVfD0w43J8lo4aqWA5HvYeoc5p88pCxa1I2eL+0VOvh6WGfgG020fgdTe9rgCOYEuaZnUzusLGUKBvSFVvKZFRzHcw0gtaLfNWKmJrPblfXqvb+Fz3lvmJuo3SXN5abQLcgie/VTa6ZtJwBkiVvcFxrWODy6GmzoBzQ2CI6ystmGqOECmO8j9VZwWC+68hsazomVMZXYt9o8M6QTE6E0yY+S5Hj+H95Xe9haWOIghwAFtxq30UtbCsHwgv/pBA+ip1so0Lh/KRby39VmF+hMG0io6NQ1wt1B2SM+1dH+cFPLYeSHlv9073lQf7oPoVq7IMPiq4e1rpEkat8VY4jhQ+oZqMYJi7hJaQNp6yr/CcBiaxEVKRaNXAh0eBA3S8W4dg2FwzVH1Drkc2J6nlgdlznUky17/AGauFuO2dh+DtD2kVg4Ai1pIm4BB3Vvi+Gc5tv4jAHANBLnNdAcAB4vb6lc7hhFVoFucC2usaraxePqMqvAqOGQjS3Loc3WPyXocNI+GcDr+8Y59MtaHAkmGu7gTKRXuEcTqmqWVHZhDiDvyiZPhAQom6yOEHKHP6fkpv/W51b9CvTMR7JYKMopuaHAnlc4DReXV+E8zsrgBJgXMCbXXL5bd13lsnCxT4rTOojyKTiFRvuSWWDiPCVSq8LqASIPb+6n4kMtJje30TU3NLu6u0PBqLX1IcJAaTB02H5rSqcGpkk3HgIAHayq8CZy1Xfyges/2Wd9ofJhzvUq2W5XVSWTHmNqngKbTaf8AkPzCbW4aSOV2+4/MarOwuIcSZMq9wnFvc4NJEZoNtoWbMpztqXGq+Lwr6ZgOzfL5EqKjUfmhym4viC2qQI/yVXo4kkgEBam7GbqU6jVYLHxTjUGWRBvuqL9T3VrCVAGkkSJVuKTJYbjo+6pDjw4RBUTa9M9B3CWKR3E9yFnTW1ukJJ5GGI1HUdQp6LWNcCaDHeBL49JhZmKxMZQOUgGSL5p0ntf1UnDsU5zoJmx2hS43SyzemrjuJ1ajcriGUxoxnKB3O6yftImGjQ3PnsocbLnRJsdEU2wfP81ccZImWVtWcPV/etGQfGLgu/F0JITMUWuqPOaJc6QW+PUSkDofI2dPoU1zQST1JXWOK7wqnlJfYltN4kEHa1vNCiwbg1tTqWZR4yQhEezNaPdgkCQ30gLxprqznEhgyyYJ5bSY/wAhdvhfaFsFrqNVhgizXFtxHUghcxicc9o/gOnrIc31b9Fxylk1I74696SnRO5E+BP5qlxnDN5ZqtBGxEn5KvWrVqmxA6AZR6qA4KprlJ67+pTHCy72uWUs4jR4OabGOa6oy5mJi0eKt0+G0DcMaexn6Fc77oixCQNj9Vb07fdJnqasdKeGUxoyO0hRcO4cKdXMCYuYI8DusRmMqN0qPH/UforVHjFYaua7+po+ohZ7M9eV78foTH0Q57ieqrsw0EGVrcO4ZUxBkUYaTd+ZzB5AzPkFYx/CKVH/AOQ4u/BAd6kRHmnfJ8uzt3zpzVWncqz9gqNphxFqglvUgRfw1C0KWMa2m5rKMvIcHPNtZ0O9kyriiaFMbMbbrt+i6+znPLJOFf8AhTHUiNitUYgBuY+ilpVg4SNFO6rqMzGj4eym4XSIfPgQp6rRIncqyxt1LbYsk2q4oAZjulqDlHdPxlIkOKH0HBgdaLb3urPDN8h9FpJsm/Zh1K0qXDM1/eROwb+ZKtN4O3d7z5gfQLW2WF7k7H5JV0FPhVLds9yT+aE2ac5SqEXlw7for2H4i0gtruqOGwaBEfzQ4E+Sy3VFFmSzay2eG9U4hRDoZMAWcQGX6RrH/UZT8EDWMWEXJDg0k+EmSPVc8lU7Y1310L8OKdQsd8UZuZwuOrZInfZTUOGGqYZSkfjIaB8gs3hXAq9W7W5Gn7zhH/EaldHhKOEwXM576lXoHaHxAMDzkrh1M5OMbuu2Et5s1GH/AO1sTmyljWj8Uz9LlaNDBYPC3qTVqdLEDy0HndGN45XrAgH3bDsNSO+p+SzadEA2Enrr6DZZ3nl6rr+DWM9M/uu47jFarZv7pnQTJ89fSFlVKcTvpqn4nGsZvmd0Bt5n9FDSrl7XOMTI0sAt449viM27U/tR0tuE0P5IG0KtUI213KkofA7yXf2cZ5IX2N+wT6DnRAMDqoAmydFUaeK0Ze8jzVymCqdZxBZAm36KywkQCbnaVjfDfufWfZwAnWe0Jar5oN8lFVdctAdJEWFoT67ctINg28Ck8F8tnCvGVvYKy16zsI2Wt7BaNNkBVk8OQlAQoKeI9hnG9Ku1w/mH/wCmyPksfFezOLp/7ReOtMh3y1+Sr4XiVRnwucOxLfotvB+1eIbqcw/mAPzEFcN9bH3ld9dO/Zn8O9mq9W7h7odXgg+TdfWFpto4XCG8VXjxkj55W/VV+JcfrYg5Qcjfwtt6nU9lUpYcC5ufHQdgpe/L13X2iztnpn5q5jOM1qtgRTabAC0+ervkFXo0APE+P5BLWyiHvIaBoT+Q3VCvxY6U+XxPxH9FrHH6RLfetKpA+LXpv59Fm1cW57nMENaBoN56nUqu3Gu3Ep2EBzOJEZjbyXSYyOdtqB+GIBU+Ed+7d3Vqu3lPZMwLQWkHqtZJizTh9zbvunNbDHdwtUsSfZGnstVlispk/orIodlp/Y2bFRVqB0B80RFXrEWABJhQ0aTs4cdlco4cuOoAGvipq9INbM6KezW+S0dcymu8gKthWl1gt7B4YNCexfJcPRgKy1Oa0dE8MWdoYAhSZEIrkw9j9mu8R+mqVtNrdJ8/7rmwY0stjhdVzmHMSYMX8lm4drpjntYpDm231sosVxZrbU+Y/iI5R2G6g4j8B7j6rLVxx3zUyysS1q7nmXEk+KY0Smq5g2iy3eHOcn0aGitUAM3Yx8lewLBcxcCyp4b+K/8ArP5rLf2S1/hPZN4cLHup8YOR3ZQcP+E9/wAlcvKYrraIO6kFDxKhCnY4rTI+zhK2gFOhQMNFvRObQHQJ4U9BRTqNADQAdhCnATmp4UDWhPATgEDVQKAkT0Ij/9k=",
      alt: "Cafe Entrance",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Heading with artistic touch */}
      <HeadingWithUnderline headingText="Where we Create 📍" />

      <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-6">
        {/* Left Side - Image Grid (Full width on mobile, 50% on desktop) */}
        <div className="w-full lg:w-1/2">
          <h3
            className="text-xl font-bold mb-4 text-yellow-300"
            style={{
              fontFamily: "Poor Story",
            }}
          >
            The Vibe &#127912;
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cafeImages.slice(0, 6).map((image) => (
              <div
                key={image.id}
                className="relative aspect-square group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all"
                  onClick={() => setSelectedImage(image)}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black/70 px-2 py-1 rounded text-sm">
                    Click to View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Map (Full width on mobile, 50% on desktop) */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto">
          <div className="relative h-full rounded-xl overflow-hidden border-2 border-yellow-400 shadow-lg shadow-yellow-400/20">
            <iframe
              src="https://maps.google.com/maps?q=The+Hole+In+The+Wall+Cafe&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="filter grayscale(20%) contrast(110%)"
              style={{ border: 0 }}
            ></iframe>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-pulse bg-yellow-400 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                <div className="bg-red-500 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
