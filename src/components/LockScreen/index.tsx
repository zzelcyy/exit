import { LockScreenClock, LockScreenDate, LockScreenDateWrapper, LockScreenWrapper } from "./LockedStyle";
import Password from "./Password";

const LockScreen: React.FC = () => (
    <LockScreenWrapper>
        {/* <LockScreenDateWrapper>
            <LockScreenClock>09:30</LockScreenClock>
            <LockScreenDate>2024년 10월 31일</LockScreenDate>
        </LockScreenDateWrapper> */}
        <Password />
    </LockScreenWrapper>
);

export default LockScreen;
