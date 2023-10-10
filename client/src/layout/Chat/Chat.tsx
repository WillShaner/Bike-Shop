import React from 'react';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
function Chat() {
  return (
    <CommentTwoToneIcon
      sx={{
        fontSize: 70,
        position: 'fixed',
        zIndex: 999,
        bottom: 20,
        left: 'calc(100% - 75px)',
        color: 'white',
        bgcolor: '#223030',
        padding: '16px',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    />
  );
}

export default Chat;
