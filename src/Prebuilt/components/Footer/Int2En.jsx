import {
    selectLocalPeerID,
    useHMSActions,
    useHMSStore,
  } from "@100mslive/react-sdk";
  import { Tooltip } from "@100mslive/roomkit-react";
  import IconButton from "../../IconButton";
  
  const Int2EnButton = () => {
    const hmsActions = useHMSActions();
    const localPeerId = useHMSStore(selectLocalPeerID);
    const changeRole = () => {
      hmsActions.changeRoleOfPeer(localPeerId, "int-to-en", true);
    };
  
    return (
      <Tooltip title="Interpreting to English">
        <IconButton onClick={changeRole}>
          <div className="text-xs text-slate-200 rounded-lg">EN</div>
        </IconButton>
      </Tooltip>
    );
  };
  export default Int2EnButton;