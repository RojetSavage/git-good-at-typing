const addBadge = (badgeNum:string) => {
    const currentBadges = localStorage.getItem('badges')
    if (currentBadges === null) {
      localStorage.setItem('badges', `${badgeNum}`)
    } else {
      localStorage.setItem('badges', currentBadges.concat(` ${badgeNum}`))
    }
  }

export {
	addBadge
}