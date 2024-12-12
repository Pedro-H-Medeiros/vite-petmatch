import { Dog, HandHeart, HeartHandshake } from 'lucide-react'

import dashboardBackground from '@/assets/dashboard-background.svg'
import carouselFirst from '@/assets/image-1.png'
import quemSomos from '@/assets/quem-somos.png'
import { CardDashboard } from '@/components/card-dashboard'

export function Dashboard() {
  return (
    <>
      <img
        src={dashboardBackground}
        alt=""
        className="absolute left-0 -z-50 w-[-webkit-fill-available] bg-no-repeat"
      />

      <div className="flex w-full flex-col pb-4 pt-56">
        <img src={carouselFirst} alt="" />

        <section className="mt-11 flex flex-wrap justify-between gap-4">
          <CardDashboard
            title="Adote um amigo"
            icon={<Dog size={176} />}
            redirect="/adopt"
            buttonName="adotar"
          />
          <CardDashboard
            title="Seja um doador"
            icon={<HandHeart size={176} />}
            redirect="/donate"
            buttonName="doar"
          />
          <div className="opacity-50">
            <CardDashboard
              title="Seja um volúntário"
              icon={<HeartHandshake size={176} />}
              redirect="#"
              buttonName="ser voluntario"
            />
          </div>
        </section>

        <div className="mt-20 flex">
          <div className="flex flex-col gap-9 font-Inter">
            <h1 className="text-5xl">Quem somos?</h1>
            <div>
              <p className="w-2/3 text-2xl">
                Nosso projeto tem como objetivo principal conectar pessoas que
                desejam adotar, resgatar ou doar animais de forma simples e
                acessível. A plataforma é voltada para o bem-estar dos pets e a
                responsabilidade social, permitindo que ONGs e cuidadores
                independentes gerenciem de maneira eficiente o processo de
                adoção e resgate.
              </p>
              <p className="w-2/3 text-2xl">
                Além disso, buscamos criar um espaço que facilite a visibilidade
                para animais que precisam de um lar e para ações de
                conscientização, promovendo o cuidado e a proteção animal. Nosso
                sistema é projetado para oferecer informações claras e diretas,
                fortalecendo a conexão entre ONGs e a comunidade.
              </p>
            </div>
          </div>
          <div className="min-w-max">
            <img src={quemSomos} alt="" />
          </div>
        </div>

        <div className="mt-20">
          <div className="space-y-12 text-center">
            <div className="h-px rounded-full bg-green-500" />
            <p className="font-sans text-2xl">
              &copy; 2024 kactus Innovations Ltda. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
