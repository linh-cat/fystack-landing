'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WithdrawModal } from './WithdrawModal';

export function WithdrawModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Open Withdraw Modal
      </Button>
      <WithdrawModal open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
}

