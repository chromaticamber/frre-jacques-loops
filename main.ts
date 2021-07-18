basic.showIcon(IconNames.EigthNote)
music.setTempo(120)
music.playTone(294, music.beat(BeatFraction.Whole))
for (let index = 0; index < 4; index++) {
    music.playTone(330, music.beat(BeatFraction.Whole))
}
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Double))
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Double) * 1.5)
basic.forever(function () {
	
})
