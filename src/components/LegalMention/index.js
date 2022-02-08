import './legalMention.scss';

import LegalMentionCard from './LegalMentionCArd';
import { useSelector } from 'react-redux';
import ScrollToTop from '../ScrollToTop';
import CategoryNav from '../CategoryNav';

const LegalMention = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  return (
    <section className="legalMention__container">
      <CategoryNav />
      <ScrollToTop />
      <div className="legalMention--title">
        <p>Mentions légales</p>
      </div>
      <LegalMentionCard />
    </section>
  );
};

export default LegalMention;
