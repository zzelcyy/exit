import styled from "styled-components";

export const LockScreenWrapper = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    height: --webkit-fill-available;
    background: center / cover url("${process.env.PUBLIC_URL}/assets/lockscreen-background.jpg");
`;

export const LockScreenDateWrapper = styled.div`
    position: absolute;
    bottom: 140px;
    left: 32px;
`;

export const LockScreenClock = styled.p`
    color: #ffffff;
    font-size: 72px;
    word-break: keep-all;
`;

export const LockScreenDate = styled.p`
    color: #ffffff;
    word-break: keep-all;
    font-size: 42px;
`;
