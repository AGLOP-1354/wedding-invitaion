import ScrollMotion from '@/component/scrollMotion';

import classes from './page.module.css';

const InvitationLetter = () => {
  return (
    <section className={classes.InvitationLetter}>
      <ScrollMotion>
        <div className={classes.title}>소중한 분들과 함께하고 싶습니다.</div>
      </ScrollMotion>

      <ScrollMotion>
        <span className={classes.letter}>
          두 사람이 하나가 될 새 인생을 시작합니다.<br />
          사랑으로 가득 채워 즐거움은 나누고 어려움은 이겨내는<br />
          함께 나아가는 삶을 꾸리겠습니다.<br />
          부디 걸음 하시어 축복하여 주시면<br />
          더없는 기쁨이 되겠습니다.<br />
        </span>
      </ScrollMotion>
    </section>
  )
};

export default InvitationLetter;
