import React, { FC } from "react"
import { PathWayCompleteButton } from "../Unit/PathWayCompleteButton"
import { CircularProgress } from "../Activity/CircularProgress"
import { PathwayButton } from "../Activity/PathwayButton"
import { BeeLocale } from "../Localization/localization"
import { getSectionPathIndexClass } from "../Pages/getSectionPathIndexClass"

type FindYourPathProps = {
  locale: BeeLocale
}

export const FindYourPath: FC<FindYourPathProps> = ({ locale }) => {
  const sectionPathIndexClass = getSectionPathIndexClass(0)

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 sm:flex-row sm:gap-4">
      <div className="flex w-4/5 flex-col items-center justify-center gap-6 sm:flex-row sm:gap-1">
        <div className="flex w-full flex-col items-center sm:w-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="">
              <PathWayCompleteButton size="small" className={sectionPathIndexClass} />
            </div>
            <div className="mr-24">
              <CircularProgress percent={75} size="small">
                <PathwayButton size="small" className={sectionPathIndexClass} />
              </CircularProgress>
            </div>
            <div className="mr-24">
              <CircularProgress percent={0} size="small">
                <PathwayButton size="small" className={sectionPathIndexClass} />
              </CircularProgress>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center sm:w-1/2">
          <div className="flex w-4/5 flex-col gap-4">
            <p className="text-6xl font-bold text-amber-500">{T[locale].findYourPath}</p>
            <p className="text-center text-2xl sm:text-center">{T[locale].welcomeText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const en = {
  welcomeText:
    "Welcome to an adventure where learning meets fun! With our app, you can discover your own unique journey, blending excitement and education seamlessly.",
  findYourPath: "Find your path",
}
const pt: typeof en = {
  welcomeText:
    "Bem-vindo a uma aventura onde a aprendizagem encontra a diversão! Com o nosso aplicativo, você pode descobrir sua própria jornada única, misturando emoção e educação de forma perfeita.",
  findYourPath: "Encontre o seu caminho",
}
const es: typeof en = {
  welcomeText:
    "¡Bienvenido a una aventura donde el aprendizaje se encuentra con la diversión! Con nuestra aplicación, puedes descubrir tu propio viaje único, mezclando emoción y educación de forma perfecta.",
  findYourPath: "Encuentra tu camino",
}
const fr: typeof en = {
  welcomeText:
    "Bienvenue dans une aventure où l'apprentissage rencontre le plaisir! Avec notre application, créez votre propre chemin, entre amusement et apprentissage.",
  findYourPath: "Trouvez votre chemin",
}
const de: typeof en = {
  welcomeText:
    "Willkommen in einem Abenteuer, bei dem Lernen auf Spaß trifft! Mit unserer App entdecken Sie Ihre eigene einzigartige Reise, die Aufregung und Bildung verbindet.",
  findYourPath: "Finde deinen Weg",
}
export const T = { en, pt, es, fr, de }
