import PerfilFrame from './pages/perfil/components/perfilFrame';
import styles from './styles.module.css';
import Link from 'next/link'

export function getUrlIconePefil() {
  //ToDo: Implementar pegar do banco a url do ícone do perfil do usuário
  return 'https://img.lovepik.com/png/20231028/Cartoon-cute-pixel-style-art-dog-Pixel-puppy-Yellow-dog_383168_wh860.png'; //Mockado
}

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.machine}>
        <div className={styles.screen}>
          <div id={styles["IconePerfilFrameMenuInicial"]}>
            <Link href="/pages/perfil">
              <PerfilFrame url={getUrlIconePefil()}>
              </PerfilFrame>
            </Link>
          </div>
          <div className={styles.menu}>
            <Link
              href="/pages/board"
              className={`${styles.button_play} ${styles.button_menu}`}
            />
            <Link
              href="/pages/online/bypass"
              className={`${styles.button_rank} ${styles.button_menu}`}
            />
            <Link
              href="/pages/loja"
              className={`${styles.button_store} ${styles.button_menu}`}
            />
          </div>
        </div>
      </div>
    </main >
  );
}
