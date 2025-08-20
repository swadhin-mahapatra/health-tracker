import React from "react"
import Modal from "../UI/Modal"

export default function BadgeModal({ isOpen, onClose, badge }) {
  if (!isOpen) return null

  return (
    <Modal onClose={onClose}>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">🏆 Badge Unlocked!</h3>
        <p className="text-lg text-indigo-400 font-semibold mb-2">
          {badge?.label || "Unknown Badge"}
        </p>
        <p className="text-sm text-gray-400">{badge?.description}</p>
      </div>
    </Modal>
  )
}
