import { Link } from 'react-router';
import { Icon } from '../components/Icon';
import { Img } from '../components/Media';

export default function NotFound() {
  return (
    <>
      <title>Page introuvable · Cabanes Belki</title>
      <meta name="robots" content="noindex" />
      <section className="hero hero--page is-in">
        <div className="hero__media"><div className="hero__slide is-active"><Img name="sentier-neige" alt="" eager sizes="100vw" /></div></div>
        <div className="hero__inner">
          <p className="hero__script">Vous vous êtes égaré en forêt…</p>
          <h1 className="hero__title">Page introuvable</h1>
          <div className="btn-row">
            <Link className="btn" to="/">Retour à l'accueil <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
