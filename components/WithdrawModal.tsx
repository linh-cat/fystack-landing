'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { X } from 'lucide-react';

interface WithdrawModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WithdrawModal({ open, onOpenChange }: WithdrawModalProps) {
  const [amount, setAmount] = useState('0');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [useNewAddress, setUseNewAddress] = useState(false);
  const [notes, setNotes] = useState('');

  const handleWithdraw = () => {
    // Handle withdrawal logic here
    console.log('Withdraw:', { amount, recipientAddress, notes });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border border-solid border-border">
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-semibold text-center">Withdraw</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Chain Selector */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Chain</Label>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/50">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
              <span className="font-medium">Sepolia Ethereum Testnet</span>
            </div>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <div className="flex items-center gap-3 p-3 border border-solid border-border rounded-lg bg-background">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">E</span>
                </div>
                <span className="text-sm font-medium">ETH</span>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 border-0 shadow-none focus-visible:ring-0 p-0"
                  placeholder="0"
                />
                <div className="text-right text-sm text-muted-foreground">
                  <div>Balance: 0.01999</div>
                  <Button variant="link" size="sm" className="p-0 h-auto text-blue-500">
                    Max
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <div className="grid grid-cols-3 gap-2 mb-2">
              {['100', '0.001', '1', '2.4', '0.0001', '1000'].map((note) => (
                <Button
                  key={note}
                  variant="outline"
                  size="sm"
                  onClick={() => setAmount(note)}
                  className="text-xs"
                >
                  {note}
                </Button>
              ))}
            </div>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="border border-solid border-border resize-none"
              rows={3}
            />
          </div>

          {/* Recipient Address */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="recipient">Recipient Address</Label>
              <div className="flex items-center gap-2">
                <Label htmlFor="use-new-address" className="text-sm text-muted-foreground">
                  Use new address
                </Label>
                <Switch
                  id="use-new-address"
                  checked={useNewAddress}
                  onCheckedChange={setUseNewAddress}
                />
              </div>
            </div>
            {useNewAddress ? (
              <Input
                id="recipient"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="Enter recipient address"
                className="border border-solid border-border"
              />
            ) : (
              <Select>
                <SelectTrigger className="border border-solid border-border">
                  <SelectValue placeholder="Choose from address book" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="address1">Address 1</SelectItem>
                  <SelectItem value="address2">Address 2</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>

          {/* Withdraw Button */}
          <Button
            onClick={handleWithdraw}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            size="lg"
          >
            Withdraw
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

