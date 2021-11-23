<template>
    <PopupWrapper name="create-team-folder">

        <!--Title-->
        <PopupHeader :title="popupTitle" icon="user-plus" />

		<!--Content-->
        <PopupContent>

			<!--Item Thumbnail-->
            <ThumbnailItem v-if="! isNewFolderTeamCreation" class="item-thumbnail" :item="item" info="metadata" />

			<!--Form to set team folder-->
            <ValidationObserver @submit.prevent="createTeamFolder" ref="teamFolderForm" v-slot="{ invalid }" tag="form" class="form-wrapper">

                <!--Set folder name-->
                <ValidationProvider v-if="isNewFolderTeamCreation" tag="div" mode="passive" class="input-wrapper password" name="Name" rules="required" v-slot="{ errors }">
                    <label class="input-label">{{ $t('popup_create_folder.label') }}:</label>
                    <input v-model="name" :class="{'is-error': errors[0]}" type="text" ref="name" class="focus-border-theme" :placeholder="$t('popup_create_folder.placeholder')">
                    <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
                </ValidationProvider>

				<!--Add Member-->
				<ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Email" v-slot="{ errors }">
					<label class="input-label">{{ $t('Add Member') }}:</label>

					<div class="relative">
						<span
							v-if="email"
							@click="addMember"
							class="button-base theme absolute right-2 px-3 py-2 font-bold text-sm rounded-lg top-1/2 transform -translate-y-1/2 cursor-pointer"
						>
							Add
						</span>
						<input @keypress.enter.stop.prevent="addMember" ref="email" v-model="email" :class="{'is-error': errors[0]}" type="email" class="focus-border-theme" :placeholder="$t('Type member email...')">
					</div>
					<span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
				</ValidationProvider>

				<!--Member list-->
				<ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Members" rules="required" v-slot="{ errors }">
					<label class="input-label">{{ $t('Your Members') }}:</label>
					<span v-if="errors[0]" class="error-message" style="margin-top: -5px">
						{{ $t('Please add at least one member.') }}
					</span>

					<TeamList v-model="invitations" />

					<p v-if="Object.values(invitations).length === 0" class="text-xs dark:text-gray-500">
						{{ $t('Please add at least one member into your Team Folder.') }}
					</p>
				</ValidationProvider>

				<InfoBox v-if="! isNewFolderTeamCreation" style="margin-bottom: 0">
					<p v-html="$t('popup.move_into_team_disclaimer')"></p>
				</InfoBox>
            </ValidationObserver>

        </PopupContent>

		<!--Actions-->
        <PopupActions>
            <ButtonBase
				class="popup-button"
				@click.native="$closePopup()"
				button-style="secondary"
			>{{ $t('popup_move_item.cancel') }}
            </ButtonBase>
            <ButtonBase
				class="popup-button"
				@click.native="createTeamFolder"
				button-style="theme"
				:loading="isLoading"
				:disabled="isLoading"
			>{{ popupSubmit }}
            </ButtonBase>
        </PopupActions>
    </PopupWrapper>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate/dist/vee-validate.full'
	import PopupWrapper from '/resources/js/components/Others/Popup/PopupWrapper'
	import PopupActions from '/resources/js/components/Others/Popup/PopupActions'
	import PopupContent from '/resources/js/components/Others/Popup/PopupContent'
	import PopupHeader from '/resources/js/components/Others/Popup/PopupHeader'
	import ThumbnailItem from '/resources/js/components/Others/ThumbnailItem'
	import ButtonBase from '/resources/js/components/FilesView/ButtonBase'
	import TeamList from "./Components/TeamList";
	import {required} from 'vee-validate/dist/rules'
	import InfoBox from "../Others/Forms/InfoBox";
	import {events} from '/resources/js/bus'
	import axios from "axios";

	export default {
		name: 'CreateTeamFolderPopup',
		components: {
			ValidationProvider,
			ValidationObserver,
			TeamList,
			ThumbnailItem,
			PopupWrapper,
			PopupActions,
			PopupContent,
			PopupHeader,
			ButtonBase,
			required,
			InfoBox,
		},
		computed: {
			popupTitle() {
				return this.item ? this.$t('Convert as Team Folder') : this.$t('Create Team Folder')
			},
			popupSubmit() {
				return this.item ? this.$t('Move & Invite Members') : this.$t('Create Team Folder')
			},
			isNewFolderTeamCreation() {
				return !this.item
			}
		},
		data() {
			return {
				invitations: [],
				item: undefined,
				name: undefined,
				email: undefined,
				isLoading: false,
			}
		},
		methods: {
			async createTeamFolder() {
				const isValid = await this.$refs.teamFolderForm.validate()

				if (!isValid) return

				this.isLoading = true

				let route = this.name
					? `/api/teams/folders`
					: `/api/teams/folders/${this.item.data.id}/convert`

				let payload = this.name
					? {
						name: this.name,
						invitations: this.invitations,
					}
					: {
						invitations: this.invitations,
					}

				axios
					.post(route, payload)
					.then(response => {
						let isTeamFoldersLocation = this.$isThisRoute(this.$route, ['TeamFolders'])

						// Redirect into newly created team folder
						if (isTeamFoldersLocation && this.$route.params.id) {
							this.$router.push({name: 'TeamFolders', params: {id: response.data.data.id}})

							// Add created team folder into Team Folder homepage view
						} else if (isTeamFoldersLocation && !this.$route.params.id) {
							this.$store.commit('ADD_NEW_FOLDER', response.data)

							// Redirect to Team Folders after converting simple folder
						} else if (!isTeamFoldersLocation) {
							this.$router.push({name: 'TeamFolders'})
						}

						let toasterMessage = this.isNewFolderTeamCreation
							? this.$t('Your Team was invited successfully.')
							: this.$t('Your Team was invited and folder was moved into Team Folders section.')

						events.$emit('toaster', {
							type: 'success',
							message: toasterMessage,
						})

						this.$store.dispatch('getAppData')
					})
					.catch(() => this.$isSomethingWrong())
					.finally(() => {
						this.isLoading = false
						this.name = undefined
						this.invitations = undefined

						this.$closePopup()
					})
			},
			addMember() {
				let email = this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)[0]

				if (!email) {
					this.$refs.teamFolderForm.setErrors({
						'Email': this.$t("You have to type valid email")
					});

					return
				}

				this.$refs.teamFolderForm.reset()

				this.invitations.push({
					type: 'invitation',
					email: this.email,
					permission: 'can-edit',
				})

				this.email = undefined
			}
		},
		mounted() {
			events.$on('popup:open', args => {
				if (args.name !== 'create-team-folder') return

				this.item = args.item

				this.$nextTick(() => {

					if (this.$isMobile()) return

					if (this.item)
						this.$refs.email.focus()

					if (!this.item)
						this.$refs.name.focus()
				})
			})

			events.$on('popup:close', () => {
				setTimeout(() => {
					this.email = undefined
					this.name = undefined
					this.item = undefined
					this.invitations = []
				}, 150)
			})
		}
	}
</script>

<style scoped lang="scss">
    @import "resources/sass/vuefilemanager/_inapp-forms.scss";
	@import '/resources/sass/vuefilemanager/_forms';

	.item-thumbnail {
		margin-bottom: 20px;
	}
</style>