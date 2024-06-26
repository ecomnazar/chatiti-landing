import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Title } from "@/shared/ui/Title";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        {/* <nav className="bg-primary h-[50px] flex items-center">
          <Container>
            <Flex enableJustifyBetween>
              <Image src={'/chatiti-logo.svg'} width={90} height={21} alt="Chatiti logo" />
              <h2 className="font-playfair text-[16px] font-semibold">Профиль</h2>
            </Flex>
          </Container>
        </nav> */}

        <Container className="mt-[45px] text-center">
          <h1 className="text-[20px] sm:text-[35px] font-semibold">Твои личные ассистенты chatGPT онлайн</h1>
          <h3 className="text-[#353535]/60 font-[300] font-inter text-[12px] sm:text-[25px]">ИИ помощь на каждый день</h3>
          <div className="gradientBorder w-fit h-auto mt-[50px] mx-auto">
            <div className="bg-[#F4E7D9] rounded-[20px] flex items-center justify-center h-[47px] w-[260px] sm:w-[430px] mx-auto multi-shadow border border-[#FCB38B]/40 ">
              <h4 className="-translate-y-[2px] text-[14px] sm:text-[18px] text-[#353535] font-medium font-inter">☕️  чат с психологом</h4>
            </div>
          </div>
          <Image src={'/banner-2.png'} width={856} height={449} alt="Banner" className="mt-8 rounded-[20px]" />
        </Container>

      </header>

      <main className="mt-[51px]">

        <section>
          <Container>
            <Button title="Каталог ассистентов" />
            <h3 className="font-inter text-[10px] sm:text-[14px] font-[300] text-center mt-5">Выбери специалиста и попробуй <span className="font-bold">бесплатно</span></h3>

            <div className="border border-[#8DB9D9] rounded-[15px] shadow-gray pr-[10px] sm:pr-8 mt-[30px] sm:mt-[50px] overflow-hidden">
              <Flex enableJustifyBetween>
                <div><div className="relative w-[87px] h-[100px] sm:w-[197px] sm:h-[216px]"><Image src={'/women.png'} fill alt="Women" /></div></div>
                <div className="max-w-[530px]">
                  <h3 className="font-inter text-[12px] sm:text-[25px] font-[300] text-right">“Мы создали виртуальных специалистов в разных областях, чтобы быть улучшить качество твоей жизни” </h3>
                  <div className="hidden sm:block mt-[28px]">
                    <Flex className="!items-end gap-x-5 justify-end">
                      <h5 className="font-[600] font-inter text-[18px] translate-y-1.5">Команда разработчиков</h5>
                      <Image src={'/chatiti-logo.svg'} width={81} height={22} alt="Chatiti logo" />
                    </Flex>
                  </div>
                </div>
              </Flex>
            </div>
          </Container>
        </section>

        <section className="mt-[50px]">
          <Container>
            <Flex enableJustifyBetween>
              <div>
                <Title title="Каждая модель - специально обученный ИИ" className="max-w-[355px]" />
                <p className="font-inter text-[#353535] text-[12px] sm:text-[25px] font-[300] max-w-[355px]">Любая помощь и поддержка - круглосуточно и профессионально в Chatiti.ru</p>
              </div>
              <Image src={'/image-1.png'} width={470} height={460} alt="Women" className="w-[153px] h-[150px] sm:w-[470px] sm:h-[460px]" />
            </Flex>
          </Container>
        </section>

        <section className="mt-[50px]">
          <Container className="relative">
            <Title title="Совет психолога, подобрать диету, пообщаться с бизнес - коучем?" />
            <h4 className="text-[#8DB9D9] font-inter text-[65px] font-extrabold">Да!</h4>

            <div className="mt-[23px] relative">
              <Flex className="flex-col gap-y-[15px] sm:gap-y-7 !items-start relative z-[10]">
                <Flex className="gap-[7px] sm:gap-9">
                  <Image src={'/icon-1.svg'} width={40} height={40} alt="Icon" className="w-[14px] h-[14px] sm:w-[40px] sm:h-[40px]" />
                  <p className="text-[12px] sm:text-[25px] font-inter font-[300]">Искусственный интеллект знает сотни лучших практик и готов стать твоим.</p>
                </Flex>
                <Flex className="gap-[7px] sm:gap-9">
                  <Image src={'/icon-2.svg'} width={40} height={40} alt="Icon" className="w-[14px] h-[14px] sm:w-[40px] sm:h-[40px]" />
                  <p className="text-[12px] sm:text-[25px] font-inter font-[300]">База знаний - более 5000 книг, лекций, курсов и профильной литературы со всего мира.</p>
                </Flex>
                <Flex className="gap-[7px] sm:gap-9">
                  <Image src={'/icon-3.svg'} width={40} height={40} alt="Icon" className="w-[14px] h-[14px] sm:w-[40px] sm:h-[40px]" />
                  <p className="text-[12px] sm:text-[25px] font-inter font-[300]">Не нужно никуда ехать, больших денег и не врет.</p>
                </Flex>
                <Flex className="gap-[7px] sm:gap-9">
                  <Image src={'/icon-4.svg'} width={40} height={40} alt="Icon" className="w-[14px] h-[14px] sm:w-[40px] sm:h-[40px]" />
                  <p className="text-[12px] sm:text-[25px] font-inter font-[300]">100% анонимно и лично для тебя.</p>
                </Flex>
              </Flex>
              <div className="h-[260px] w-[260px] sm:w-[476px] sm:h-[475px] absolute z-[-10] bottom-0 left-1/2 sm:left-auto -translate-x-1/2 sm:bottom-auto sm:-top-1/2 sm:translate-x-0 sm:right-0"><Image src={'/logo-bg.svg'} fill alt="Logo" /></div>
            </div>

            <Image src={'/image-2n.png'} width={260} height={180} alt="Image 2" className="rounded-[16px] w-[260px] h-[180px] sm:w-[552px] sm:h-[362px] mt-[30px] sm:mt-[65px] mx-auto" />


          </Container>
        </section>

        <section className="mt-[30px] sm:mt-[66px]">
          <Container>
            <Title title="Это лишь часть твоей личной команды:" className="text-center mb-[30px] sm:mb-9" />
            <div className="sm:px-[70px] grid grid-cols-1 md:grid-cols-2 gap-x-[20px] lg:gap-x-[76px] gap-y-[15px] sm:gap-y-[30px]">
              {Array.from({ length: 8 }).map((_, index) => {
                return <div key={index} className="w-[260px] mx-auto bg-secondary h-[89px] sm:h-[112px] sm:w-full rounded-[21px] pt-[11px] sm:pt-5 pl-5 pr-[55px] relative overflow-hidden">
                  <p className="max-w-[210px] text-[12px] sm:text-[14px] font-normal font-opensans text-[#F4E7D9]">ИИ психолог онлайн, чат - попробуй бесплатно, круглосуточно и анонимно</p>
                  <div className="w-[140px] h-[19px] bg-primary rounded-t-[10px] absolute bottom-0 left-1/2 -translate-x-1/2 text-[12px] font-semibold font-inter text-secondary flex items-center justify-center">Психолог</div>
                  <div className="w-[63px] h-[112px] absolute -right-[20px] sm:right-0 top-1/2 -translate-y-1/2 sm:translate-y-0 sm:top-0">
                    <Image src={'/right-rounded.svg'} fill alt="Right" />
                    <div className="h-[50px] w-[50px] sm:w-[75px] sm:h-[75px] absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[35%]">
                      <Image src={'/person-1.png'} fill alt="Person" />
                    </div>
                  </div>
                </div>
              })}
            </div>
            <Button title="Попробовать бесплатно" className="mt-[43px]" />
            <h4 className="text-[16px] font-semibold font-playfair mt-[35px] sm:mt-[43px] mb-[28px] text-center">О нас в соцсетях:</h4>
            <a href="https://youtu.be/HgIlfFbrO5s" target="_blank">
              <Image src={'/social-media-image.png'} width={217} height={385} alt="Social media" className="mx-auto" />
            </a>
            <h4 className="text-[16px] font-semibold font-playfair mt-[40px] text-center">Подпишись на нас!</h4>

            <Flex className="!justify-center gap-x-3 mt-[17px]">
              <Image src={'/vk-logo.svg'} width={50} height={50} alt="Social media" />
              <Image src={'/tg-logo.svg'} width={50} height={50} alt="Social media" />
            </Flex>
          </Container>
        </section>

      </main>

      <footer className="mt-[52px] bg-primary pb-[17px]">
        <Container>
          <div className="max-w-[320px] mx-auto relative pt-[30px]">
            <ul className="space-y-1 mb-[46px]">
              <li className="text-[14px] sm:text-[18px] font-normal font-opensans">Правовая информация</li>
              <li className="text-[14px] sm:text-[18px] font-normal font-opensans">Политика конфиденциальности</li>
              <li className="text-[14px] sm:text-[18px] font-normal font-opensans">Обратная связь</li>
              <li className="text-[14px] sm:text-[18px] font-normal font-opensans">Соискателям & Инвесторам</li>
            </ul>
            <Image src={'/chatiti-logo.svg'} width={110} height={30} alt="Chatiti logo" className="mx-auto" />
            <p className="text-center text-[14px] sm:text-[18px] font-opensans my-8">Разработка: ООО “АСТРА”. Россия, Санкт-Петербург</p>
            <p className="text-[9px] font-normal font-opensans text-center">Chatiti© 2024г.<br />Все права защищены</p>
            <Image src={'/logo-footer-bg.svg'} width={350} height={350} alt="Logo" className="absolute top-0 left-0" />
          </div>
        </Container>
      </footer>
    </>
  );
}
